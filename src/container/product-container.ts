import { AppDataSource } from "../database/data-source";
import { ProductController } from "../module/product/controller/product.controller";
import { ProductRepository } from "../module/product/repository/product.repository";
import { CreateProductUseCase } from "../module/product/usecase/create-product.usecase";
import { DeleteProductUseCase } from "../module/product/usecase/delete-product.usecase";
import { GetAllProductUseCase } from "../module/product/usecase/get-all-product.usecase";
import { GetByIdUseCase } from "../module/product/usecase/get-by-id.usecase";
import { UpdateProductUseCase } from "../module/product/usecase/update-product.usecase";

const productRepository = new ProductRepository(AppDataSource);

const productCreate = new CreateProductUseCase(productRepository);

const productUpdate = new UpdateProductUseCase(productRepository);

const productsGetAll = new GetAllProductUseCase(productRepository);
const productGetById = new GetByIdUseCase(productRepository);

const productDelete = new DeleteProductUseCase(productRepository);

const productController = new ProductController(
  productCreate,
  productUpdate,
  productDelete,
  productGetById,
  productsGetAll
);

export const productContainer = {
  productController,
};
