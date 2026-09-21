import '@fontsource-variable/inter'
import '../../styles/tokens.css'
import '../../styles/base.css'
import './Layout.css'
import type { ReactNode } from 'react'
import { useLocale } from '../../i18n/LocaleContext.tsx'
import type { PageId } from '../../routing/routes.ts'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'

/**
 * Le cadre commun : un lien d'évitement, l'en-tête, le contenu, le pied.
 *
 * La police et les jetons sont importés ici, avant tout composant : l'ordre des feuilles
 * de style suit celui des imports, et une règle de composant doit pouvoir compter sur les
 * variables qu'elle lit.
 */
export function Layout({ page, children }: { page: PageId | null; children: ReactNode }) {
  const { t } = useLocale()
  return (
    <div className="layout">
      <a className="layout__skip" href="#contenu">
        {t.skipToContent}
      </a>
      <Header page={page} />
      <main id="contenu" className="layout__main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
