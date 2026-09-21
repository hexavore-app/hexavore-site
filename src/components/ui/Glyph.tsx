import type { ReactNode } from 'react'

export type GlyphName = 'barcode' | 'camera' | 'search' | 'sentence'

/**
 * Les pictogrammes des quatre modes de saisie, tracés au trait comme ceux de l'application.
 *
 * Décoratifs : ils accompagnent un titre qui dit la même chose, et un lecteur d'écran qui
 * les annoncerait lirait deux fois chaque carte.
 */
const shapes: Readonly<Record<GlyphName, ReactNode>> = {
  barcode: (
    <>
      <path d="M4 5v14M7 5v14M11 5v14M14 5v14M18 5v14M20 5v14" />
      <path d="M8.5 5v14M16 5v14" strokeWidth="0.8" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M15 15l5 5" />
    </>
  ),
  sentence: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
}

export function Glyph({ name }: { name: GlyphName }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  )
}
