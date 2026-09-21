/**
 * Les langues du site : celles de l'application ([docs/01] § Plateforme).
 *
 * Le français est la langue de la racine, l'anglais celle de `/en/`. L'ordre compte : le
 * premier est aussi celui qu'un moteur de recherche propose faute de mieux (`x-default`).
 */
export const locales = ['fr', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'
