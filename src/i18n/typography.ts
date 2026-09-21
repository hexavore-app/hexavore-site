import type { Locale } from './locale.ts'

const NO_BREAK = ' '
const NARROW_NO_BREAK = ' '

/**
 * Les espaces insécables de la typographie française.
 *
 * Une espace ordinaire devant un deux-points laisse le navigateur couper la ligne juste
 * avant lui, et le signe se retrouve seul en tête de la suivante — constaté sur la page
 * d'accueil dès le premier affichage. Espace insécable devant `:` et à l'intérieur des
 * guillemets, espace fine insécable devant `;`, `!` et `?`.
 *
 * **Appliquée au rendu, pas écrite dans les textes.** Une espace insécable ne se voit pas
 * dans un fichier source : la première correction tapée au clavier la remplacerait par
 * une ordinaire sans que personne le remarque. La règle, elle, ne s'oublie pas.
 *
 * Seule une espace ordinaire précédée d'un caractère visible est remplacée : une adresse
 * web ne contient pas d'espace, un saut de ligne n'en est pas une.
 */
export function frenchSpacing(text: string): string {
  return text
    .replace(/(\S) ([:»])/g, `$1${NO_BREAK}$2`)
    .replace(/« (\S)/g, `«${NO_BREAK}$1`)
    .replace(/(\S) ([;!?])/g, `$1${NARROW_NO_BREAK}$2`)
}

/** La règle de composition de chaque langue. L'anglais n'en a pas : ses signes collent au mot. */
export const typesetting: Readonly<Record<Locale, (text: string) => string>> = {
  fr: frenchSpacing,
  en: (text) => text,
}
