import type { ReactNode } from 'react'
import type { Macro } from '../nutrition/macros.ts'

/**
 * Tout ce que le site dit, dans une langue.
 *
 * **Les composants portent la structure, les dictionnaires portent les mots.** Une page
 * ne contient aucune phrase ; un dictionnaire ne contient aucune mise en page. Les deux
 * changent pour des raisons différentes — une reformulation, une refonte — et ne se
 * touchent pas.
 *
 * **Une interface, et non un objet de référence dont l'autre langue serait une copie.**
 * Les deux dictionnaires sont interchangeables pour toute page, et un texte oublié dans
 * l'un est une erreur de compilation, pas une chaîne vide découverte en ligne.
 *
 * `ReactNode` là où une phrase porte un lien : le lien fait partie de la phrase, et le
 * couper en trois morceaux à recoller dans le composant forcerait chaque langue à suivre
 * l'ordre des mots de l'autre.
 */
export interface Dictionary {
  /** Le nom de cette langue, dans cette langue : c'est lui que le sélecteur affiche. */
  readonly languageName: string
  readonly skipToContent: string
  readonly homeLinkLabel: string
  readonly nav: {
    /** Le nom de la navigation d'en-tête : les langues et le code. */
    readonly header: string
    /** Le nom de la navigation de pied de page : les pages du site. */
    readonly footer: string
    readonly privacy: string
    readonly legal: string
    readonly source: string
  }
  readonly footer: {
    readonly licenses: ReactNode
    readonly credits: ReactNode
  }
  readonly home: HomeText
  readonly privacy: {
    readonly meta: PageMeta
    readonly site: Section
  }
  readonly legal: {
    readonly meta: PageMeta
    readonly title: string
    readonly sections: readonly Section[]
  }
  readonly notFound: {
    readonly title: string
    readonly body: string
    readonly homeLink: string
  }
}

export interface PageMeta {
  readonly title: string
  readonly description: string
}

export interface Section {
  readonly title: string
  readonly paragraphs: readonly ReactNode[]
}

/** Les quatre modes de saisie de l'application, qui convergent vers le même écran. */
export type EntryMode = 'barcode' | 'photo' | 'search' | 'sentence'

export interface Card {
  readonly title: string
  readonly body: ReactNode
}

export interface HomeText {
  readonly meta: PageMeta
  readonly hero: {
    readonly eyebrow: string
    readonly title: string
    readonly lead: string
    readonly status: string
    readonly primaryAction: string
    readonly secondaryAction: string
  }
  readonly entry: {
    readonly title: string
    readonly intro: string
    /** Par mode et non en liste : l'ordre et le pictogramme appartiennent à la page. */
    readonly modes: Readonly<Record<EntryMode, Card>>
  }
  readonly counters: {
    readonly title: string
    readonly intro: string
    readonly names: Readonly<Record<Macro, string>>
    readonly figureLabel: string
  }
  readonly features: {
    readonly title: string
    readonly items: readonly Card[]
  }
  readonly promises: {
    readonly title: string
    readonly items: readonly string[]
    readonly body: string
    readonly link: string
  }
  readonly openSource: {
    readonly title: string
    readonly body: ReactNode
    readonly sources: readonly ReactNode[]
  }
  readonly disclaimer: string
}
