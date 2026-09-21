import { MacroHexagon } from '../../components/hexagon/MacroHexagon.tsx'
import { SAMPLE_DAY } from '../../components/hexagon/ratios.ts'
import { Section } from '../../components/ui/Section.tsx'
import { useLocale } from '../../i18n/LocaleContext.tsx'
import { macros } from '../../nutrition/macros.ts'
import './Counters.css'

/**
 * Les six compteurs, nommés dans l'ordre où la figure les montre.
 *
 * **La couleur ne porte jamais seule une information** (docs/08, § Daltonisme) : chaque
 * teinte est posée à côté de son nom, et la liste suit le sens horaire depuis le haut —
 * la position est le second canal, et elle ne sert que si elle est la même partout.
 */
export function Counters() {
  const { t } = useLocale()
  const counters = t.home.counters
  return (
    <Section id="compteurs" title={counters.title} intro={counters.intro}>
      <figure className="counters">
        <MacroHexagon ratios={SAMPLE_DAY} label={counters.figureLabel} className="counters__figure" />
        <figcaption>
          <ol className="counters__legend">
            {macros.map((macro) => (
              <li key={macro} className={`counters__item macro--${macro}`}>
                <span className="counters__swatch" aria-hidden="true" />
                {counters.names[macro]}
              </li>
            ))}
          </ol>
        </figcaption>
      </figure>
    </Section>
  )
}
