import { AppError } from "../../../common/error/app-error";
import type { Product } from "../entities/product.entity";
import type { ProductRepository } from "../repository/product.repository";

export class GetByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: number): Promise<Product | null> {
    const product = await this.productRepository.getProductById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    return product;
  }
}
