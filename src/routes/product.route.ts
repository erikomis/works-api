import { type Request, type Response, Router } from "express";
import { productContainer } from "../container/product-container";
import { validateMiddleware } from "../common/middleware/validate.middleware";
import { ProductRequestDto } from "../module/product/dtos/product-request.dto";

export const routeProduct = Router();

routeProduct.get(
  "/",
  productContainer.productController.getProducts.bind(
    productContainer.productController
  )
);

routeProduct.get(
  "/:id",
  productContainer.productController.getProductById.bind(
    productContainer.productController
  )
);

routeProduct.post(
  "/",
  validateMiddleware("body", ProductRequestDto),
  productContainer.productController.createProduct.bind(
    productContainer.productController
  )
);

routeProduct.put(
  "/:id",
  validateMiddleware("body", ProductRequestDto),
  productContainer.productController.updateProduct.bind(
    productContainer.productController
  )
);

routeProduct.delete(
  "/:id",
  productContainer.productController.deleteProduct.bind(
    productContainer.productController
  )
);
