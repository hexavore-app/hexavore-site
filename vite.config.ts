import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, searchForWorkspaceRoot } from 'vite'

/**
 * Le dossier de la politique de confidentialité, dans une copie du dépôt de l'application.
 *
 * **Elle ne vit pas ici.** Elle vit à côté du code qu'elle décrit, qui la change dans la
 * même pull request que le flux réseau ajouté (D124 du dépôt hexavore). Le site la lit à
 * chaque construction : la CI extrait ce dossier, une machine de développement désigne sa
 * propre copie par `HEXAVORE_APP_DIR` (voir `.env.example`).
 *
 * **Introuvable, la construction s'arrête.** Un site publié sans sa politique serait pire
 * qu'un site absent : il aurait l'air complet.
 */
function policyDirectory(mode: string): string {
  const env = loadEnv(mode, process.cwd(), 'HEXAVORE_')
  const app = resolve(process.env.HEXAVORE_APP_DIR ?? env.HEXAVORE_APP_DIR ?? '../hexavore')
  const directory = resolve(app, 'confidentialite')
  if (!existsSync(directory)) {
    throw new Error(
      `Politique de confidentialité introuvable dans ${directory}. ` +
        'HEXAVORE_APP_DIR doit désigner une copie du dépôt hexavore-app/hexavore (voir .env.example).',
    )
  }
  return directory
}

export default defineConfig(({ mode }) => {
  const policy = policyDirectory(mode)
  return {
    plugins: [react()],
    resolve: { alias: { '@politique': policy } },
    // Le serveur de développement ne sert rien hors du projet sans qu'on le lui dise.
    server: { fs: { allow: [searchForWorkspaceRoot(process.cwd()), policy] } },
    // Le manifeste dit quelle feuille de style la construction a produite : c'est tout ce
    // que la mise en pages statiques retient de la construction du navigateur.
    build: { manifest: true },
  }
})
