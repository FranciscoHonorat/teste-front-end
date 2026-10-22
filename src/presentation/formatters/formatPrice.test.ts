import { describe, it, expect } from 'vitest'
import { formatPrice } from './formatPrice'

const NBSP = ' '

describe('formatPrice', () => {
  it('formata centavos como reais', () => {
    expect(formatPrice(14990)).toBe(`R$${NBSP}149,90`)
  })

  it('mostra os centavos zerados', () => {
    expect(formatPrice(15000)).toBe(`R$${NBSP}150,00`)
  })

  it('separa o milhar com ponto', () => {
    expect(formatPrice(149990)).toBe(`R$${NBSP}1.499,90`)
  })
})
