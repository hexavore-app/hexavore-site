import { type Locale, locales } from '../i18n/locale.ts'

/** Les pages du site. En ajouter une se fait ici, et le compilateur réclame le reste. */
export type PageId = 'home' | 'privacy' | 'legal'

/**
 * L'adresse de chaque page dans chaque langue.
 *
 * **Une table exhaustive, pas une convention.** `Record<PageId, Record<Locale, …>>` refuse
 * de compiler une page sans sa traduction, ou une langue sans sa page — le même service
 * que le `when` exhaustif rend à la fabrique des fournisseurs d'IA dans l'application.
 *
 * **Toutes finissent par une barre.** GitHub Pages sert `confidentialite/index.html` à
 * `/confidentialite/` ; sans la barre, il redirige d'abord, et une adresse canonique qui
 * redirige est une adresse que les moteurs de recherche corrigent à notre place.
 */
const paths: Readonly<Record<PageId, Readonly<Record<Locale, string>>>> = {
  home: { fr: '/', en: '/en/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
}

export interface Route {
  readonly page: PageId
  readonly locale: Locale
  readonly path: string
}

/**
 * L'adresse d'une page. Le seul moyen d'écrire un lien interne : une page qui n'existe pas
 * ne se nomme pas, donc ne se lie pas.
 */
export function href(page: PageId, locale: Locale): string {
  return paths[page][locale]
}

export function allRoutes(): Route[] {
  return (Object.keys(paths) as PageId[]).flatMap((page) =>
    locales.map((locale) => ({ page, locale, path: href(page, locale) })),
  )
}

/**
 * La page servie à une adresse, ou `undefined`.
 *
 * Accepte l'adresse sans sa barre finale : c'est ce qu'un visiteur tape, et ce que le
 * serveur de développement transmet tel quel.
 */
export function routeAt(pathname: string): Route | undefined {
  const normalised = pathname.endsWith('/') ? pathname : `${pathname}/`
  return allRoutes().find((route) => route.path === normalised)
}
