import { useEffect, useState } from 'react'
import type { ListProducts } from '../../application/usecases/ListProducts'
import type { Product } from '../../domain/entities/Product'

export type ProductsState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'success'; products: Product[] }

export function useProducts(listProducts: Pick<ListProducts, 'execute'>): ProductsState {
  const [state, setState] = useState<ProductsState>({ status: 'loading' })

  useEffect(() => {
    listProducts
      .execute()
      .then((products) => setState({ status: 'success', products }))
      .catch(() => setState({ status: 'error' }))
  }, [listProducts])

  return state
}
