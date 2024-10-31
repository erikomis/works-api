import { AppError } from "../../../common/error/app-error";
import type { Product } from "../entities/product.entity";
import type { ProductRepository } from "../repository/product.repository";

export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: number, product: Product): Promise<Product> {
    const productExists = await this.productRepository.getProductById(id);

    if (!productExists) {
      throw new AppError("Product not found", 404);
    }

    return this.productRepository.updateProduct(id, product);
  }
}
