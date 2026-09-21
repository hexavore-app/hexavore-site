import { locales } from '../i18n/locale.ts'
import { allRoutes, href } from '../routing/routes.ts'
import { site } from '../site.ts'

/**
 * Le plan du site, chaque page avec ses traductions.
 *
 * Écrit depuis la table des adresses, jamais à la main : une page ajoutée y entre d'elle-même,
 * et une page retirée en sort.
 */
export function sitemap(): string {
  const entries = allRoutes().map((route) => {
    const alternates = locales
      .map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${site.origin}${href(route.page, locale)}"/>`)
      .join('\n')
    return `  <url>\n    <loc>${site.origin}${route.path}</loc>\n${alternates}\n  </url>`
  })
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n')
}

export function robots(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`
}
