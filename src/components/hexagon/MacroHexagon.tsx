import { type Macro, macros } from '../../nutrition/macros.ts'
import { hexagon, quarter, toPath } from './geometry.ts'
import './MacroHexagon.css'

const RADIUS = 100

interface Props {
  readonly ratios: Readonly<Record<Macro, number>>
  /** La description de la figure. Absente, la figure est décorative et se tait. */
  readonly label?: string
  readonly className?: string
}

/**
 * L'hexagone des macros : six quartiers remplis depuis le centre, le contour de l'objectif
 * tracé par-dessus.
 *
 * **Le contour est dessiné en dernier**, comme dans l'application : c'est la référence à
 * laquelle tout le reste se compare, et rien ne doit le masquer.
 */
export function MacroHexagon({ ratios, label, className }: Props) {
  const described = label !== undefined
  return (
    <svg
      className={['macro-hexagon', className].filter(Boolean).join(' ')}
      viewBox="-112 -100 224 200"
      role={described ? 'img' : undefined}
      aria-label={label}
      aria-hidden={described ? undefined : true}
      focusable="false"
    >
      {macros.map((macro) => (
        <path
          key={macro}
          className={`macro-hexagon__quarter macro--${macro}`}
          d={toPath(quarter(macro, ratios[macro], RADIUS))}
        />
      ))}
      <path className="macro-hexagon__goal" d={toPath(hexagon(RADIUS))} />
    </svg>
  )
}
