import { createContext, type ReactNode, use } from 'react'
import type { Dictionary } from './dictionary.ts'
import { en } from './en.tsx'
import { fr } from './fr.tsx'
import type { Locale } from './locale.ts'

export const dictionaries: Readonly<Record<Locale, Dictionary>> = { fr, en }

interface LocaleValue {
  readonly locale: Locale
  readonly t: Dictionary
}

const LocaleContext = createContext<LocaleValue | null>(null)

/**
 * La langue de la page, fournie une fois en haut de l'arbre.
 *
 * Les composants la demandent au lieu de la recevoir de parent en parent : un en-tête qui
 * transmet un dictionnaire qu'il ne lit pas à trois niveaux de profondeur dépend de ce
 * qu'il ne connaît pas.
 */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext value={{ locale, t: dictionaries[locale] }}>{children}</LocaleContext>
}

export function useLocale(): LocaleValue {
  const value = use(LocaleContext)
  if (value === null) {
    throw new Error('useLocale() hors de LocaleProvider : la page ne sait pas dans quelle langue parler.')
  }
  return value
}
