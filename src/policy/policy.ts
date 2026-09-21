import en from '@politique/en.md?raw'
import fr from '@politique/fr.md?raw'
import { Marked } from 'marked'
import type { Locale } from '../i18n/locale.ts'

/**
 * La politique de confidentialité de l'application, telle que son dépôt l'écrit.
 *
 * **Ce site ne la rédige pas, il la publie.** Le texte vit à côté du code qu'il décrit, et
 * `@politique` désigne ce dossier dans une copie du dépôt (voir `vite.config.ts`). Une
 * reformulation se fait là-bas, dans la même pull request que le flux réseau qui l'exige.
 *
 * La conversion a lieu à la construction : le visiteur reçoit du HTML, jamais le
 * convertisseur.
 */
const sources: Readonly<Record<Locale, string>> = { fr, en }

const markdown = new Marked({ gfm: true })

export function policyHtml(locale: Locale): string {
  return markdown.parse(sources[locale], { async: false })
}
