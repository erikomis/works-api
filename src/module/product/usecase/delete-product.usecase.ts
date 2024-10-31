import { AppError } from "../../../common/error/app-error";
import type { ProductRepository } from "../repository/product.repository";
export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: number): Promise<void> {
    const product = await this.productRepository.getProductById(id);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    await this.productRepository.deleteProduct(id);
  }
}
