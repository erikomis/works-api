import { Product } from "../entity/product.entity";


export interface ProductRepositoryProtocol {
  createProduct(product: Product): Promise<Product>;
  getProducts(pageNumber: number, pageSize: number): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
  updateProduct(id: number, product: Product): Promise<Product>;
  deleteProduct(id: number): Promise<void>;
  findByPlu(plu: string): Promise<Product | null>;
}
