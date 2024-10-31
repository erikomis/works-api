import type { Request, Response } from "express";
import { CreateProductUseCase } from "../usecase/create-product.usecase";

export class ProductController {
  private readonly createProductUseCase: CreateProductUseCase;

  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }

  public async createProduct(req: Request, res: Response) {
    const product = req.body;
    const newProduct = await this.createProductUseCase.execute(product);
    res.status(201).json(newProduct);
  }
}
