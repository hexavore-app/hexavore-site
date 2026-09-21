import type { Macro } from '../../nutrition/macros.ts'

export interface Point {
  readonly x: number
  readonly y: number
}

/**
 * L'axe de chaque quartier, en degrés depuis l'est, sens antihoraire.
 *
 * Les mêmes valeurs que `MacroHexagonGeometry.kt` dans l'application : la figure du site
 * est celle de l'écran d'accueil, pas une illustration qui lui ressemble.
 */
export const axis: Readonly<Record<Macro, number>> = {
  calories: 90,
  protein: 30,
  fiber: 330,
  carbs: 270,
  sugars: 210,
  fat: 150,
}

/** Un point d'angle et de rayon donnés, en coordonnées d'écran : l'ordonnée descend. */
export function polar(degrees: number, radius: number): Point {
  const radians = (degrees * Math.PI) / 180
  return { x: radius * Math.cos(radians), y: -radius * Math.sin(radians) }
}

/** Les six sommets d'un hexagone à sommet plat — deux arêtes horizontales. */
export function hexagon(radius: number): Point[] {
  return [0, 60, 120, 180, 240, 300].map((degrees) => polar(degrees, radius))
}

/**
 * Le quartier d'une macro remplie à `ratio` de son objectif.
 *
 * Le triangle centre → sommet à (axe − 30°) → sommet à (axe + 30°), homothétique depuis le
 * centre. **Le rayon est proportionnel à la valeur, pas la surface** : c'est la convention
 * de l'application, et un quartier à moitié plein couvre donc le quart de sa part. À 1, le
 * quartier coïncide avec l'arête : le contour de l'hexagone est l'objectif.
 *
 * Borné à [0, 1] : la figure du site montre une journée d'exemple, jamais un dépassement.
 */
export function quarter(macro: Macro, ratio: number, radius: number): Point[] {
  const reach = radius * Math.min(1, Math.max(0, ratio))
  return [{ x: 0, y: 0 }, polar(axis[macro] - 30, reach), polar(axis[macro] + 30, reach)]
}

/** Un tracé SVG fermé, arrondi au centième : la page n'a pas à porter quinze décimales. */
export function toPath(points: readonly Point[]): string {
  const commands = points.map((point, index) => `${index === 0 ? 'M' : 'L'}${round(point.x)} ${round(point.y)}`)
  return `${commands.join(' ')} Z`
}

const round = (value: number): number => Math.round(value * 100) / 100
