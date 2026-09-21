import type { ReactNode } from 'react'
import type { Dictionary, PageMeta } from '../i18n/dictionary.ts'
import type { Locale } from '../i18n/locale.ts'
import { policyHtml } from '../policy/policy.ts'
import type { PageId } from '../routing/routes.ts'
import { HomePage } from './home/HomePage.tsx'
import { LegalNoticePage } from './LegalNoticePage.tsx'
import { PrivacyPage } from './PrivacyPage.tsx'

/** Ce qu'une page doit fournir pour être servie : ses métadonnées et son contenu. */
export interface PageDefinition {
  meta(t: Dictionary): PageMeta
  render(locale: Locale): ReactNode
}

/**
 * Le seul endroit qui sait quelle page affiche quoi, et d'où viennent ses données.
 *
 * **Une table exhaustive sur `PageId`** : une page ajoutée aux adresses sans être ajoutée
 * ici ne compile pas. Le document, le serveur de développement et la mise en pages
 * statiques la lisent tous ; aucun ne connaît une page par son nom.
 *
 * C'est aussi ici que la politique de confidentialité rejoint sa page : la page reçoit un
 * texte, elle ne sait pas qu'il vient d'un autre dépôt.
 */
export const pages: Readonly<Record<PageId, PageDefinition>> = {
  home: {
    meta: (t) => t.home.meta,
    render: () => <HomePage />,
  },
  privacy: {
    meta: (t) => t.privacy.meta,
    render: (locale) => <PrivacyPage policy={policyHtml(locale)} />,
  },
  legal: {
    meta: (t) => t.legal.meta,
    render: () => <LegalNoticePage />,
  },
}
