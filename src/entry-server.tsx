/**
 * Ce que la mise en pages statiques appelle : un document par adresse, la page d'erreur,
 * et les deux fichiers des robots.
 *
 * `renderToStaticMarkup` et non `renderToString` : rien ne s'hydratera, donc les marques
 * que React laisse pour s'y raccrocher seraient du poids mort.
 */
import type { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Document } from './document/Document.tsx'
import { robots, sitemap } from './document/crawlers.ts'
import { dictionaries } from './i18n/LocaleContext.tsx'
import { defaultLocale, type Locale, locales } from './i18n/locale.ts'
import { typesetting } from './i18n/typography.ts'
import { NotFoundView, PageView } from './pages/PageView.tsx'
import { pages } from './pages/registry.tsx'
import { href, type Route } from './routing/routes.ts'
import { site } from './site.ts'

export { allRoutes } from './routing/routes.ts'

export function renderRoute(route: Route, stylesheets: readonly string[]): string {
  const meta = pages[route.page].meta(dictionaries[route.locale])
  const alternates = Object.fromEntries(
    locales.map((locale) => [locale, `${site.origin}${href(route.page, locale)}`]),
  ) as Record<Locale, string>

  return html(
    route.locale,
    <Document
      lang={route.locale}
      title={meta.title}
      description={meta.description}
      stylesheets={stylesheets}
      alternates={alternates}
    >
      <PageView route={route} />
    </Document>,
  )
}

export function renderNotFound(stylesheets: readonly string[]): string {
  const text = dictionaries[defaultLocale].notFound
  return html(
    defaultLocale,
    <Document
      lang={defaultLocale}
      title={`${text.title} · ${site.name}`}
      description={text.body}
      stylesheets={stylesheets}
      alternates={null}
    >
      <NotFoundView />
    </Document>,
  )
}

export function renderSitemap(): string {
  return sitemap()
}

export function renderRobots(): string {
  return robots()
}

/**
 * Le document, composé selon la typographie de sa langue.
 *
 * La composition passe sur le HTML entier et non sur chaque texte : les phrases viennent
 * des dictionnaires, du Markdown de la politique et des composants, et une règle posée à
 * un seul de ces endroits laisserait passer les deux autres.
 */
const html = (locale: Locale, document: ReactElement): string =>
  `<!doctype html>\n${typesetting[locale](renderToStaticMarkup(document))}\n`
