import { dictionaries } from '../i18n/LocaleContext.tsx'
import { locales } from '../i18n/locale.ts'
import { href } from '../routing/routes.ts'
import './TextPage.css'

/**
 * La page d'une adresse inconnue, dans toutes les langues à la fois.
 *
 * GitHub Pages sert le même `404.html` à toute adresse perdue, quelle que soit la langue
 * de qui l'a tapée : la page ne peut pas choisir, donc elle ne choisit pas.
 */
export function NotFoundPage() {
  return (
    <article className="text-page container">
      {locales.map((locale) => {
        const text = dictionaries[locale].notFound
        return (
          <section key={locale} lang={locale} className="text-page__section">
            <h1 className="text-page__title">{text.title}</h1>
            <p>{text.body}</p>
            <p>
              <a href={href('home', locale)}>{text.homeLink}</a>
            </p>
          </section>
        )
      })}
    </article>
  )
}
