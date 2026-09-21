import { useLocale } from '../i18n/LocaleContext.tsx'
import './TextPage.css'

/** Les mentions que la LCEN exige de tout site publié : éditeur, hébergeur, et le reste. */
export function LegalNoticePage() {
  const { t } = useLocale()
  return (
    <article className="text-page container">
      <h1 className="text-page__title">{t.legal.title}</h1>
      {t.legal.sections.map((section, index) => {
        const heading = `mention-${index}`
        return (
          <section key={section.title} className="text-page__section" aria-labelledby={heading}>
            <h2 id={heading}>{section.title}</h2>
            {section.paragraphs.map((paragraph, rank) => (
              <p key={rank}>{paragraph}</p>
            ))}
          </section>
        )
      })}
    </article>
  )
}
