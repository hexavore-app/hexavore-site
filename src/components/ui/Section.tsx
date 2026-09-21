import type { ReactNode } from 'react'
import './Section.css'

/**
 * Une section de page, nommée par son titre.
 *
 * `aria-labelledby` plutôt qu'une étiquette recopiée : le lecteur d'écran annonce la
 * section par le titre qu'on voit, et les deux ne peuvent pas diverger.
 */
export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string
  title: string
  intro?: ReactNode
  children?: ReactNode
}) {
  const heading = `${id}-titre`
  return (
    <section className="section container" aria-labelledby={heading}>
      <h2 id={heading} className="section__title">
        {title}
      </h2>
      {intro !== undefined && <p className="section__intro">{intro}</p>}
      {children}
    </section>
  )
}
