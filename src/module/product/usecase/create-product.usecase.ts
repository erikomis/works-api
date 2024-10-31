import { Product } from "../entity/product.entity";
import type { ProductRepository } from "../repository/product.repository";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: Product): Promise<Product> {
    const productExists = await this.productRepository.findByPlu(product.plu);

    if (productExists) {
      throw new Error("Product already exists");
    }

    return this.productRepository.createProduct(product);
  }
}
