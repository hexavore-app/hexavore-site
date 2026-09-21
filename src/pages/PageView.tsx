import { Layout } from '../components/layout/Layout.tsx'
import { LocaleProvider } from '../i18n/LocaleContext.tsx'
import { defaultLocale } from '../i18n/locale.ts'
import type { Route } from '../routing/routes.ts'
import { NotFoundPage } from './NotFoundPage.tsx'
import { pages } from './registry.tsx'

/**
 * Le corps d'une page : sa langue, son cadre, son contenu.
 *
 * Le même composant sert la mise en pages statiques et le serveur de développement. Ce
 * qu'on regarde en développant est donc ce qui sera publié, au document près.
 */
export function PageView({ route }: { route: Route }) {
  return (
    <LocaleProvider locale={route.locale}>
      <Layout page={route.page}>{pages[route.page].render(route.locale)}</Layout>
    </LocaleProvider>
  )
}

/** Le corps de la page d'erreur, dont le cadre parle la langue par défaut. */
export function NotFoundView() {
  return (
    <LocaleProvider locale={defaultLocale}>
      <Layout page={null}>
        <NotFoundPage />
      </Layout>
    </LocaleProvider>
  )
}
