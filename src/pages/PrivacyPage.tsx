import { Prose } from '../components/ui/Prose.tsx'
import { useLocale } from '../i18n/LocaleContext.tsx'
import './TextPage.css'

/**
 * La politique de confidentialité : celle de l'application, puis ce que ce site fait de
 * ses visiteurs.
 *
 * **Deux auteurs, deux sources.** Le texte de l'application arrive par `policy` — la page
 * ne sait pas d'où, et c'est ce qui la rend éprouvable avec un texte quelconque. La
 * section du site vit dans les dictionnaires de ce dépôt : c'est ici que le site change,
 * donc ici qu'elle change avec lui.
 */
export function PrivacyPage({ policy }: { policy: string }) {
  const { t } = useLocale()
  const section = t.privacy.site
  return (
    <article className="text-page container">
      <Prose html={policy} />
      <section className="text-page__section" aria-labelledby="ce-site">
        <h2 id="ce-site">{section.title}</h2>
        {section.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </article>
  )
}
