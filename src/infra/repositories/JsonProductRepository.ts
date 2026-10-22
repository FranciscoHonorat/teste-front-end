import type { Product } from "../../domain/entities/Product";
import type { ProductRepository } from "../../domain/repositories/ProductRepository";

type ProductDto = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type ProductsResponseDto = {
  success: boolean;
  products: ProductDto[];
};

const LOAD_ERROR = "Falha ao carregar produtos";

function toProduct(dto: ProductDto): Product {
  return {
    name: dto.productName,
    description: dto.descriptionShort,
    photoUrl: dto.photo,
    price: dto.price,
  };
}

export class JsonProductRepository implements ProductRepository {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getAll(): Promise<Product[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`${LOAD_ERROR} (HTTP ${response.status})`);
    }
    const body: ProductsResponseDto = await response.json();
    if (!body.success) {
      throw new Error(LOAD_ERROR);
    }
    return body.products.map(toProduct);
  }
}
