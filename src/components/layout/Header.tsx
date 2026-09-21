import { dictionaries, useLocale } from '../../i18n/LocaleContext.tsx'
import { locales } from '../../i18n/locale.ts'
import { href, type PageId } from '../../routing/routes.ts'
import { site } from '../../site.ts'
import { MacroHexagon } from '../hexagon/MacroHexagon.tsx'
import { FULL } from '../hexagon/ratios.ts'
import './Header.css'

/**
 * La marque, le lien vers le code, et les autres langues de la même page.
 *
 * **Le sélecteur mène à la même page**, pas à l'accueil de l'autre langue : quelqu'un qui
 * lit la politique de confidentialité et change de langue veut la lire, pas la chercher.
 * Une page sans adresse — la 404 — renvoie à l'accueil de chaque langue.
 */
export function Header({ page }: { page: PageId | null }) {
  const { locale, t } = useLocale()
  const others = locales.filter((other) => other !== locale)

  return (
    <header className="header">
      <div className="container header__bar">
        <a className="header__brand" href={href('home', locale)} aria-label={t.homeLinkLabel}>
          <MacroHexagon ratios={FULL} className="header__mark" />
          <span className="header__name">{site.name}</span>
        </a>
        <nav className="header__nav" aria-label={t.nav.header}>
          {others.map((other) => (
            <a key={other} href={href(page ?? 'home', other)} hrefLang={other} lang={other}>
              {dictionaries[other].languageName}
            </a>
          ))}
          <a href={site.repository}>{t.nav.source}</a>
        </nav>
      </div>
    </header>
  )
}
