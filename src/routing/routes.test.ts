import { describe, expect, it } from 'vitest'
import { locales } from '../i18n/locale.ts'
import { allRoutes, href, routeAt } from './routes.ts'

describe('routes', () => {
  it('donne une adresse distincte à chaque page dans chaque langue', () => {
    const paths = allRoutes().map((route) => route.path)
    expect(new Set(paths).size).toBe(paths.length)
    expect(paths).toHaveLength(3 * locales.length)
  })

  it("range l'anglais sous /en/ et le français à la racine", () => {
    for (const route of allRoutes()) {
      expect(route.path.startsWith('/en/')).toBe(route.locale === 'en')
    }
  })

  it('termine chaque adresse par une barre, pour que GitHub Pages ne redirige pas', () => {
    for (const route of allRoutes()) {
      expect(route.path).toMatch(/^\/.*\/$|^\/$/)
    }
  })

  it("retrouve chaque page depuis son adresse, avec ou sans barre finale", () => {
    for (const route of allRoutes()) {
      expect(routeAt(route.path)).toEqual(route)
      expect(routeAt(route.path.replace(/\/$/, '') || '/')).toEqual(route)
    }
  })

  it("ne retrouve rien à une adresse inconnue", () => {
    expect(routeAt('/nulle-part/')).toBeUndefined()
    expect(routeAt('/en/confidentialite/')).toBeUndefined()
  })

  it('lie la politique de confidentialité là où la console Play et l’application la chercheront', () => {
    expect(href('privacy', 'fr')).toBe('/confidentialite/')
    expect(href('privacy', 'en')).toBe('/en/privacy/')
  })
})
