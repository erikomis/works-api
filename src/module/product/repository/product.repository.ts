import type { DataSource, Repository } from "typeorm";
import { Product } from "../entity/product.entity";
import type { ProductRepositoryProtocol } from "./product-repository.protocol";

export class ProductRepository implements ProductRepositoryProtocol {
  private productsRepository: Repository<Product>;
  constructor(connection: DataSource) {
    this.productsRepository = connection.getRepository(Product);
  }

  async createProduct(product: Product): Promise<Product> {
    const productCreated = this.productsRepository.create(product);
    return await this.productsRepository.save(productCreated);
  }

  async getProducts(pageNumber: number, pageSize: number): Promise<Product[]> {
    const products = await this.productsRepository.find({
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
    });
    return products;
  }

  async getProductById(id: number): Promise<Product | null> {
    const result = await this.productsRepository.findOne({
      where: { id },
    });
    return result || null;
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    product.id = id;
    const updatedProduct = await this.productsRepository.save({
      ...product,
    });
    return updatedProduct;
  }

  async deleteProduct(productId: number): Promise<void> {
    await this.productsRepository.delete(productId);
  }

  async findByPlu(plu: string): Promise<Product | null> {
    const result = await this.productsRepository.findOne({ where: { plu } });
    return result || null;
  }
}
