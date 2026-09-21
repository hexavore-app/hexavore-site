import { Section } from '../../components/ui/Section.tsx'
import { useLocale } from '../../i18n/LocaleContext.tsx'
import { href } from '../../routing/routes.ts'
import './Promises.css'

/**
 * Ce que l'application refuse de faire, et le lien vers la preuve.
 *
 * Une promesse sans son détail est un slogan : la politique de confidentialité est à un
 * geste, et c'est elle qui fait foi.
 */
export function Promises() {
  const { locale, t } = useLocale()
  const promises = t.home.promises
  return (
    <Section id="promesses" title={promises.title}>
      <ul className="promises">
        {promises.items.map((item) => (
          <li key={item} className="promises__item">
            {item}
          </li>
        ))}
      </ul>
      <p className="promises__body">{promises.body}</p>
      <p>
        <a href={href('privacy', locale)}>{promises.link}</a>
      </p>
    </Section>
  )
}
