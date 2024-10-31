import type { DataSource, Repository } from "typeorm";
import type { ProductRepositoryProtocol } from "./product-repository.protocol";
import { Product } from "../entity/product.entity";

export class ProductRepository implements ProductRepositoryProtocol {
  private productsRepository: Repository<Product>;
  constructor(connection: DataSource) {
    this.productsRepository = connection.getRepository(Product);
  }

  async createProduct(product: Product): Promise<Product> {
    const result = await this.productsRepository.manager.query(
      // "EXEC InsertProduct @Plu = ?, @Description = ?, @Ncm = ?, @Unit = ?",
      // [product.plu, product.description, product.ncm, product.unidade]

      `EXEC InsertProduct @Plu = '${product.plu}', @Description = '${product.description}', @Ncm = '${product.ncm}', @Unidade = '${product.unidade}'`
    );
    return result;
  }

  async getProducts(pageNumber: number, pageSize: number): Promise<Product[]> {
    return this.productsRepository.manager.query(
      `EXEC GetPagedProducts @PageNumber = ${pageNumber} , @PageSize = ${pageSize}`
    );
  }

  async getProductById(id: number): Promise<Product | null> {
    const result = await this.productsRepository.manager.query(
      `EXEC GetProductById @ProductId = ${id}`
    );
    return result[0];
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    const result = await this.productsRepository.manager.query(
      // "EXEC UpdateProduct @ProductId = ?, @Plu = ?, @Description = ?, @Ncm = ?, @Unit = ?",
      // [id, product.plu, product.description, product.ncm, product.unidade]
      `EXEC UpdateProduct @ProductId = ${id}, @Plu = '${product.plu}', @Description = '${product.description}', @Ncm = '${product.ncm}', @Unidade = '${product.unidade}'`
    );
    return result;
  }

  async deleteProduct(productId: number): Promise<void> {
    await this.productsRepository.manager.query(
      `EXEC DeleteProduct @ProductId = ${productId}`
    );
  }

  async findByPlu(plu: string): Promise<Product | null> {
    const result = await this.productsRepository.findOne({ where: { plu } });
    return result || null;
  }
}
