import type { Macro } from '../../nutrition/macros.ts'

/** Les six objectifs atteints : la marque, et l'icône de l'onglet. */
export const FULL: Readonly<Record<Macro, number>> = {
  calories: 1,
  protein: 1,
  fiber: 1,
  carbs: 1,
  sugars: 1,
  fat: 1,
}

/**
 * Une journée d'exemple, en fin d'après-midi : rien n'est plein, rien n'est vide, et
 * aucun quartier n'en égale un autre — sans quoi la figure ne montrerait pas qu'elle lit
 * six grandeurs.
 */
export const SAMPLE_DAY: Readonly<Record<Macro, number>> = {
  calories: 0.78,
  protein: 0.64,
  fiber: 0.52,
  carbs: 0.83,
  sugars: 0.41,
  fat: 0.69,
}
