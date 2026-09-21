import type { EntryMode } from '../../i18n/dictionary.ts'
import { useLocale } from '../../i18n/LocaleContext.tsx'
import { CardGrid } from '../../components/ui/CardGrid.tsx'
import { Glyph, type GlyphName } from '../../components/ui/Glyph.tsx'
import { Section } from '../../components/ui/Section.tsx'
import { Counters } from './Counters.tsx'
import { Hero } from './Hero.tsx'
import { Promises } from './Promises.tsx'
import './HomePage.css'

/**
 * L'ordre des modes de saisie, et leur pictogramme.
 *
 * Celui de la colonne de boutons de l'accueil de l'application, du plus fréquent au plus
 * rare : le scan d'abord, la phrase en dernier.
 */
const entryModes: readonly { readonly mode: EntryMode; readonly glyph: GlyphName }[] = [
  { mode: 'barcode', glyph: 'barcode' },
  { mode: 'photo', glyph: 'camera' },
  { mode: 'search', glyph: 'search' },
  { mode: 'sentence', glyph: 'sentence' },
]

/** La vitrine : ce que fait l'application, ce qu'elle refuse de faire, et d'où viennent ses chiffres. */
export function HomePage() {
  const { t } = useLocale()
  const home = t.home
  return (
    <>
      <Hero />
      <Section id="saisie" title={home.entry.title} intro={home.entry.intro}>
        <CardGrid
          items={entryModes.map(({ mode, glyph }) => ({ card: home.entry.modes[mode], icon: <Glyph name={glyph} /> }))}
        />
      </Section>
      <Counters />
      <Section id="fonctions" title={home.features.title}>
        <CardGrid items={home.features.items.map((card) => ({ card }))} />
      </Section>
      <Promises />
      <Section id="libre" title={home.openSource.title} intro={home.openSource.body}>
        <ul className="home__sources">
          {home.openSource.sources.map((source, index) => (
            <li key={index}>{source}</li>
          ))}
        </ul>
      </Section>
      <aside className="container">
        <p className="home__disclaimer">{home.disclaimer}</p>
      </aside>
    </>
  )
}
