/**
 * La mise en pages statiques : une page HTML complète par adresse, et aucun JavaScript.
 *
 * Elle passe après deux constructions de Vite. Celle du navigateur ne sert qu'à produire
 * les feuilles de style et les polices ; celle du serveur rend chaque page avec React.
 * Ce script écrit les pages, les fichiers des robots, puis **retire tout le JavaScript**
 * que la première a produit : le site n'en exécute pas, et un fichier présent finirait
 * par être lié.
 *
 * Lancé par `npm run build`, avec le Node du projet, qui lit le TypeScript tel quel.
 */
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

type Server = typeof import('../src/entry-server.tsx')

interface ManifestChunk {
  readonly file: string
  readonly isEntry?: boolean
  readonly css?: readonly string[]
}

const DIST = 'dist'

async function write(path: string, content: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, content, 'utf8')
}

const manifestPath = join(DIST, '.vite', 'manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8')) as Record<string, ManifestChunk>

const stylesheets = [
  ...new Set(
    Object.values(manifest)
      .filter((chunk) => chunk.isEntry === true)
      .flatMap((chunk) => chunk.css ?? []),
  ),
].map((file) => `/${file}`)

if (stylesheets.length === 0) {
  throw new Error(`Aucune feuille de style dans ${manifestPath} : les pages sortiraient nues.`)
}

const server = (await import(pathToFileURL(join('dist-server', 'entry-server.js')).href)) as Server

for (const route of server.allRoutes()) {
  await write(join(DIST, route.path, 'index.html'), server.renderRoute(route, stylesheets))
}
await write(join(DIST, '404.html'), server.renderNotFound(stylesheets))
await write(join(DIST, 'sitemap.xml'), server.renderSitemap())
await write(join(DIST, 'robots.txt'), server.renderRobots())

// Le JavaScript de la construction du navigateur n'a servi qu'a rassembler les styles.
for (const chunk of Object.values(manifest)) {
  if (chunk.file.endsWith('.js')) await rm(join(DIST, chunk.file), { force: true })
}
await rm(join(DIST, '.vite'), { recursive: true, force: true })

const leftovers = (await readdir(DIST, { recursive: true })).filter((file) => /\.m?js$/.test(file))
if (leftovers.length > 0) {
  throw new Error(`Du JavaScript resterait publie : ${leftovers.join(', ')}`)
}

console.log(`${server.allRoutes().length} pages, 404.html, sitemap.xml, robots.txt — et aucun JavaScript.`)
