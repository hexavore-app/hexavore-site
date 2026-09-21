/**
 * Les six compteurs, dans l'ordre angulaire de l'application : sens horaire depuis le haut.
 *
 * C'est l'ordre de l'hexagone, des barres, et de toute liste qui les nomme. La position est
 * le second canal que la règle de daltonisme exige quand un libellé ne tient pas ; elle ne
 * renseigne que si elle est la même partout (docs/08 du dépôt hexavore, § Daltonisme).
 */
export const macros = ['calories', 'protein', 'fiber', 'carbs', 'sugars', 'fat'] as const

export type Macro = (typeof macros)[number]
