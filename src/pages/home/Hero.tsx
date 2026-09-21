import { MacroHexagon } from '../../components/hexagon/MacroHexagon.tsx'
import { SAMPLE_DAY } from '../../components/hexagon/ratios.ts'
import { ButtonLink } from '../../components/ui/ButtonLink.tsx'
import { useLocale } from '../../i18n/LocaleContext.tsx'
import { href } from '../../routing/routes.ts'
import { site } from '../../site.ts'
import './Hero.css'

/**
 * Le titre de la page, ce que fait l'application, et où en est le projet.
 *
 * **Le statut est dit en premier regard**, pas en bas de page : une vitrine qui laisse
 * chercher un bouton de téléchargement qui n'existe pas encore trompe par omission.
 */
export function Hero() {
  const { locale, t } = useLocale()
  const hero = t.home.hero
  return (
    <div className="hero container">
      <div className="hero__text">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          {hero.status}
        </p>
        <div className="hero__actions">
          <ButtonLink href={site.repository} variant="primary">
            {hero.primaryAction}
          </ButtonLink>
          <ButtonLink href={href('privacy', locale)} variant="secondary">
            {hero.secondaryAction}
          </ButtonLink>
        </div>
      </div>
      <MacroHexagon ratios={SAMPLE_DAY} className="hero__figure" />
    </div>
  )
}
