import type { Request, Response } from "express";
import type { CreateProductUseCase } from "../usecase/create-product.usecase";
import type { DeleteProductUseCase } from "../usecase/delete-product.usecase";
import type { GetAllProductUseCase } from "../usecase/get-all-product.usecase";
import type { GetByIdUseCase } from "../usecase/get-by-id.usecase";
import type { UpdateProductUseCase } from "../usecase/update-product.usecase";

export class ProductController {
  private readonly createProductUseCase: CreateProductUseCase;
  private readonly updateProductUseCase: UpdateProductUseCase;
  private readonly deleteProductUseCase: DeleteProductUseCase;
  private readonly getByIdUseCase: GetByIdUseCase;
  private readonly getAllProductUseCase: GetAllProductUseCase;
  constructor(
    createProductUseCase: CreateProductUseCase,
    updateProductUseCase: UpdateProductUseCase,
    deleteProductUseCase: DeleteProductUseCase,
    getByIdUseCase: GetByIdUseCase,
    getAllProductUseCase: GetAllProductUseCase,
  ) {
    this.createProductUseCase = createProductUseCase;
    this.updateProductUseCase = updateProductUseCase;
    this.deleteProductUseCase = deleteProductUseCase;
    this.getByIdUseCase = getByIdUseCase;
    this.getAllProductUseCase = getAllProductUseCase;
  }

  public async createProduct(req: Request, res: Response) {
    const product = req.body;
    const newProduct = await this.createProductUseCase.execute(product);
    res.status(201).json(newProduct);
  }

  public async getProducts(req: Request, res: Response) {
    const pageNumber = Number.parseInt(req.query.pageNumber as string) || 1;
    const pageSize = Number.parseInt(req.query.pageSize as string) || 10;

    const products = await this.getAllProductUseCase.execute(pageNumber, pageSize);
    res.status(200).json(products);
  }

  public async getProductById(req: Request, res: Response) {
    const productId = req.params.id;

    const product = await this.getByIdUseCase.execute(Number(productId));
    res.status(200).json(product);
  }

  public async updateProduct(req: Request, res: Response) {
    const productId = req.params.id;
    const product = req.body;
    const updatedProduct = await this.updateProductUseCase.execute(Number(productId), product);
    res.status(200).json(updatedProduct);
  }

  public async deleteProduct(req: Request, res: Response) {
    const productId = req.params.id;
    await this.deleteProductUseCase.execute(Number(productId));
    res.status(204).send();
  }
}
