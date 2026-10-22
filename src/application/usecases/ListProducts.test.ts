import { describe, it, expect } from 'vitest'
import { ListProducts } from './ListProducts'
import type { Product } from '../../domain/entities/Product'
import type { ProductRepository } from '../../domain/repositories/ProductRepository'

describe('ListProducts', () => {
  it('retorna os produtos vindos do repositório', async () => {
    const products: Product[] = [
      { name: 'Iphone 11', description: 'Iphone 11', photoUrl: 'foto.png', price: 15000 },
    ]
    const repository: ProductRepository = { getAll: async () => products }

    const listProducts = new ListProducts(repository)

    await expect(listProducts.execute()).resolves.toEqual(products)
  })
})
