/**
 * Ce que le site affirme de lui-même, écrit une fois et relu par toutes les pages.
 *
 * Une adresse de contact recopiée dans trois textes finit par en porter deux : les
 * dictionnaires, les pages et les fichiers générés lisent tous ici.
 */
export interface SiteFacts {
  readonly name: string
  /** L'origine publique, sans barre finale : les adresses canoniques s'y ajoutent. */
  readonly origin: string
  readonly repository: string
  readonly siteRepository: string
  readonly contact: string
  /**
   * L'éditeur.
   *
   * `null` reste possible : un particulier qui édite à titre non professionnel peut ne
   * rendre publique que l'identité de l'hébergeur (LCEN). Le nom y est quand même,
   * parce qu'un projet qui demande à qui l'installe de lui confier des informations de
   * santé peut bien dire qui il est.
   */
  readonly publisher: string | null
  readonly host: {
    readonly name: string
    readonly address: string
    readonly phone: string
    readonly url: string
    readonly privacy: string
  }
}

export const site: SiteFacts = {
  name: 'Hexavore',
  origin: 'https://hexavore.app',
  repository: 'https://github.com/hexavore-app/hexavore',
  siteRepository: 'https://github.com/hexavore-app/hexavore-site',
  contact: 'contact@hexavore.app',
  publisher: 'Charly Flu',
  host: {
    name: 'GitHub, Inc.',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
    // Des espaces insecables : un numero coupe en fin de ligne ne se compose plus.
    phone: '+1\u00a0877\u00a0448\u00a04820',
    url: 'https://github.com',
    privacy: 'https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement',
  },
}
