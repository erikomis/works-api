import type { NextFunction, Request, Response } from "express";
import { logger } from "../../server";
import type { AppError } from "../error/app-error";

export class ErrorHandler {
  public handle(err: AppError, req: Request, res: Response, next: NextFunction): void {
    console.log("entrou no erro");

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
        stack: err.stack,
      }),
    });
  }
}
