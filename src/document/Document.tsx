import type { ReactNode } from 'react'
import { defaultLocale, type Locale, locales } from '../i18n/locale.ts'
import { site } from '../site.ts'

/**
 * Les teintes de la barre du navigateur mobile, qui ne lit pas les variables CSS.
 * Ce sont les fonds de `styles/tokens.css` ; les changer là-bas demande de les changer ici.
 */
const THEME_DARK = '#08080c'
const THEME_LIGHT = '#fafafc'

const ogLocale: Readonly<Record<Locale, string>> = { fr: 'fr_FR', en: 'en_US' }

interface Props {
  readonly lang: Locale
  readonly title: string
  readonly description: string
  readonly stylesheets: readonly string[]
  /** Les adresses absolues de la page dans chaque langue. Absentes : une page sans adresse. */
  readonly alternates: Readonly<Record<Locale, string>> | null
  readonly children: ReactNode
}

/**
 * Le document HTML entier d'une page publiée.
 *
 * **Aucune balise `<script>`**, et ce n'est pas un oubli : le site n'exécute rien chez le
 * visiteur. React sert à le construire, pas à le faire tourner. Un test le vérifie sur
 * chaque page.
 *
 * **Chaque page annonce ses traductions** (`hreflang`) et son adresse canonique : sans
 * elles, un moteur de recherche tient la page française et la page anglaise pour deux
 * copies, et n'en garde qu'une.
 */
export function Document({ lang, title, description, stylesheets, alternates, children }: Props) {
  const canonical = alternates?.[lang]
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" content={THEME_DARK} media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content={THEME_LIGHT} media="(prefers-color-scheme: light)" />
        {canonical === undefined ? (
          <meta name="robots" content="noindex" />
        ) : (
          <>
            <link rel="canonical" href={canonical} />
            {locales.map((locale) => (
              <link key={locale} rel="alternate" hrefLang={locale} href={alternates?.[locale]} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={alternates?.[defaultLocale]} />
            <meta property="og:url" content={canonical} />
          </>
        )}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content={ogLocale[lang]} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {stylesheets.map((stylesheet) => (
          <link key={stylesheet} rel="stylesheet" href={stylesheet} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
