import type { ReactNode } from 'react'
import type { Card } from '../../i18n/dictionary.ts'
import './CardGrid.css'

export interface CardItem {
  readonly card: Card
  /** Décoratif : le titre de la carte dit déjà ce que le pictogramme montre. */
  readonly icon?: ReactNode
}

/**
 * Des cartes de même rang, en grille qui se replie seule selon la largeur.
 *
 * Une liste, pour que le lecteur d'écran annonce combien il y en a avant de les lire.
 */
export function CardGrid({ items }: { items: readonly CardItem[] }) {
  return (
    <ul className="card-grid">
      {items.map(({ card, icon }) => (
        <li key={card.title} className="card">
          {icon !== undefined && <span className="card__icon">{icon}</span>}
          <h3 className="card__title">{card.title}</h3>
          <p className="card__body">{card.body}</p>
        </li>
      ))}
    </ul>
  )
}
