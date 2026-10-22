import { ListProducts } from '../../application/usecases/ListProducts'
import { JsonProductRepository } from '../../infra/repositories/JsonProductRepository'

const PRODUCTS_URL = '/produtos.json'

export function makeListProducts(): ListProducts {
  return new ListProducts(new JsonProductRepository(PRODUCTS_URL))
}
