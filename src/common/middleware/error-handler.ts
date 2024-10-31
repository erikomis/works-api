import type { NextFunction, Request, Response } from "express";
import type { AppError } from "../error/app-error";
import { logger } from "../../server";

export class ErrorHandle {
  public handle(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    // Log do erro
    logger.error({
      message: err.message,
      stack: err.stack,
      url: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString(),
    });

   
    const statusCode = err.statusCode || 500;

    
    res.status(statusCode).json({
      status: statusCode === 500 ? "error" : "fail",
      message: statusCode === 500 ? "Internal Server Error" : err.message,
      ...(process.env.NODE_ENV === "development" && {
        stack: err.stack, // Mostrar stack apenas em desenvolvimento
      }),
    });
  }
}
