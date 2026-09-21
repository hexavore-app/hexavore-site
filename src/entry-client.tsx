import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { dictionaries } from './i18n/LocaleContext.tsx'
import { defaultLocale } from './i18n/locale.ts'
import { typesetting } from './i18n/typography.ts'
import { NotFoundView, PageView } from './pages/PageView.tsx'
import { pages } from './pages/registry.tsx'
import { routeAt } from './routing/routes.ts'

/**
 * L'entrée du serveur de développement, et d'elle seul.
 *
 * Elle affiche la page de l'adresse courante avec les mêmes composants que la mise en
 * pages statiques. Le site publié n'en contient rien : la construction ne garde de ce
 * fichier que les feuilles de style qu'il importe, et jette le JavaScript.
 */
const container = document.getElementById('root')
if (container === null) throw new Error('index.html a perdu son élément #root.')

const route = routeAt(window.location.pathname)
if (route !== undefined) {
  document.documentElement.lang = route.locale
  document.title = pages[route.page].meta(dictionaries[route.locale]).title
}

const root = createRoot(container)
flushSync(() => root.render(route === undefined ? <NotFoundView /> : <PageView route={route} />))

// La composition typographique que la mise en pages statiques applique au HTML, appliquee
// ici aux textes affiches : ce qu'on regarde en developpant reste ce qui sera publie.
const typeset = typesetting[route?.locale ?? defaultLocale]
const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT)
for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
  node.nodeValue = typeset(node.nodeValue ?? '')
}
