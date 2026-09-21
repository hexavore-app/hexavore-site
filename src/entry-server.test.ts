import { describe, expect, it } from 'vitest'
import { locales } from './i18n/locale.ts'
import { allRoutes, renderNotFound, renderRoute, renderSitemap } from './entry-server.tsx'
import { site } from './site.ts'

const STYLESHEET = '/assets/test.css'
const knownPaths = new Set([...allRoutes().map((route) => route.path), '/favicon.svg', STYLESHEET])

/** Les adresses internes d'une page : celles qui commencent par une barre, sans leur ancre. */
const internalLinks = (html: string): string[] =>
  [...html.matchAll(/href="(\/[^"#]*)[^"]*"/g)].map((match) => match[1] ?? '')

describe('chaque page publiée', () => {
  for (const route of allRoutes()) {
    const html = renderRoute(route, [STYLESHEET])

    describe(route.path, () => {
      it("n'exécute aucun JavaScript", () => {
        expect(html).not.toMatch(/<script/i)
        expect(html).not.toMatch(/\son[a-z]+=/i)
      })

      it('annonce sa langue, son titre et sa description', () => {
        expect(html.startsWith('<!doctype html>')).toBe(true)
        expect(html).toContain(`<html lang="${route.locale}"`)
        expect(html).toMatch(/<title>[^<]+<\/title>/)
        expect(html).toMatch(/<meta name="description" content="[^"]+"/)
      })

      it('donne son adresse canonique et ses traductions', () => {
        expect(html).toContain(`<link rel="canonical" href="${site.origin}${route.path}"/>`)
        for (const locale of locales) {
          expect(html).toContain(`hrefLang="${locale}"`)
        }
        expect(html).toContain('hrefLang="x-default"')
      })

      it('ne laisse aucune ponctuation française seule en tête de ligne', () => {
        if (route.locale === 'fr') expect(html).not.toMatch(/\S [:;!?»]|« \S/)
      })

      it('ne lie aucune page qui n’existe pas', () => {
        for (const link of internalLinks(html)) {
          expect(knownPaths, `lien mort : ${link}`).toContain(link)
        }
      })

      it('mène à la politique de confidentialité et aux mentions légales', () => {
        expect(html).toContain(route.locale === 'fr' ? 'href="/confidentialite/"' : 'href="/en/privacy/"')
        expect(html).toContain(route.locale === 'fr' ? 'href="/mentions-legales/"' : 'href="/en/legal-notice/"')
      })
    })
  }
})

describe('la politique de confidentialité', () => {
  it("publie le texte du dépôt de l'application, puis la section du site", () => {
    const fr = renderRoute({ page: 'privacy', locale: 'fr', path: '/confidentialite/' }, [STYLESHEET])
    const en = renderRoute({ page: 'privacy', locale: 'en', path: '/en/privacy/' }, [STYLESHEET])

    expect(fr).toContain('<h1>Politique de confidentialité</h1>')
    expect(fr).toContain('Ce site</h2>')
    expect(en).toContain('<h1>Privacy policy</h1>')
    expect(en).toContain('This website</h2>')
  })
})

describe('la page introuvable', () => {
  const html = renderNotFound([STYLESHEET])

  it('parle toutes les langues et ne se fait pas indexer', () => {
    expect(html).toContain('Page introuvable')
    expect(html).toContain('Page not found')
    expect(html).toContain('<meta name="robots" content="noindex"/>')
    expect(html).not.toMatch(/<script/i)
  })
})

describe('le plan du site', () => {
  it('liste chaque page avec ses traductions', () => {
    const xml = renderSitemap()
    for (const route of allRoutes()) {
      expect(xml).toContain(`<loc>${site.origin}${route.path}</loc>`)
    }
    expect(xml.match(/<xhtml:link /g)).toHaveLength(allRoutes().length * locales.length)
  })
})
