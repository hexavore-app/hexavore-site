import { describe, expect, it } from 'vitest'
import { frenchSpacing } from './typography.ts'

describe('les espaces insécables du français', () => {
  it('attache le deux-points au mot qui le précède', () => {
    expect(frenchSpacing('rien d’autre : pas de compte')).toBe('rien d’autre : pas de compte')
  })

  it('attache les guillemets à ce qu’ils encadrent', () => {
    expect(frenchSpacing('« creme brulee »')).toBe('« creme brulee »')
  })

  it('met une espace fine devant le point-virgule, le point d’exclamation et d’interrogation', () => {
    expect(frenchSpacing('un ; deux ! trois ?')).toBe('un ; deux ! trois ?')
  })

  it('laisse intactes les adresses et le texte déjà juste', () => {
    const text = 'https://hexavore.app/ et déjà : rien à faire'
    expect(frenchSpacing(text)).toBe(text)
  })

  it('ne touche pas une ponctuation en début de ligne', () => {
    expect(frenchSpacing('\n: rien')).toBe('\n: rien')
  })
})
