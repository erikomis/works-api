import type { ProductResponseDto } from "../dtos/product-response.dto";
import type { ProductRepository } from "../repository/product.repository";

export class GetAllProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(pageNumber: number, pageSize: number): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.getProducts(pageNumber, pageSize);

    return products.map((product) => ({
      id: product.id,
      plu: product.plu,
      description: product.description,
      ncm: product.ncm,
      unit: product.unit,
      created_at: product.created_at,
    }));
  }
}
