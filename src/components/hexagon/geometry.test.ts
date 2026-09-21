import { describe, expect, it } from 'vitest'
import { macros } from '../../nutrition/macros.ts'
import { axis, hexagon, quarter, toPath } from './geometry.ts'

const close = (a: number, b: number) => Math.abs(a - b) < 1e-9

describe("la géométrie de l'hexagone", () => {
  it('pose un hexagone à sommet plat : deux sommets sur l’horizontale', () => {
    const [east, , , west] = hexagon(100)
    expect(east?.x).toBeCloseTo(100)
    expect(west?.x).toBeCloseTo(-100)
    expect(close(east?.y ?? 1, 0) && close(west?.y ?? 1, 0)).toBe(true)
  })

  it("fait coïncider chaque quartier plein avec une arête de l'hexagone", () => {
    const vertices = hexagon(100)
    for (const macro of macros) {
      const [, first, second] = quarter(macro, 1, 100)
      const onHexagon = (point: { x: number; y: number } | undefined) =>
        vertices.some((vertex) => close(vertex.x, point?.x ?? NaN) && close(vertex.y, point?.y ?? NaN))
      expect(onHexagon(first) && onHexagon(second)).toBe(true)
    }
  })

  it("donne l'arête du haut aux calories", () => {
    const [, first, second] = quarter('calories', 1, 100)
    expect(first?.y).toBeCloseTo(second?.y ?? NaN)
    expect(first?.y ?? 0).toBeLessThan(0)
  })

  it('range les six quartiers dans le sens horaire depuis le haut, dans l’ordre des listes', () => {
    macros.forEach((macro, index) => {
      expect(axis[macro]).toBe((90 - 60 * index + 360) % 360)
    })
  })

  it('proportionne le rayon à la valeur, pas la surface', () => {
    const [, full] = quarter('protein', 1, 100)
    const [, half] = quarter('protein', 0.5, 100)
    expect(half?.x).toBeCloseTo((full?.x ?? NaN) / 2)
    expect(half?.y).toBeCloseTo((full?.y ?? NaN) / 2)
  })

  it('borne le remplissage à l’objectif', () => {
    expect(quarter('fat', 3, 100)).toEqual(quarter('fat', 1, 100))
    expect(quarter('fat', -1, 100)).toEqual(quarter('fat', 0, 100))
  })

  it('écrit un tracé fermé, arrondi au centième', () => {
    expect(toPath([{ x: 0, y: 0 }, { x: 1.23456, y: -2 }])).toBe('M0 0 L1.23 -2 Z')
  })
})
