import { AppError } from "../../../common/error/app-error";
import type { Product } from "../entity/product.entity";
import type { ProductRepository } from "../repository/product.repository";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: Product): Promise<Product> {
    const productExists = await this.productRepository.findByPlu(product.plu);

    if (productExists) {
      throw new AppError("Product already exists", 400);
    }

    return this.productRepository.createProduct(product);
  }
}
