import "express-async-errors";
import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";
import { env } from "@/common/utils/envConfig";
import { ErrorHandle } from "./common/middleware/error-handler";
import rateLimiter from "./common/middleware/rate-limiter";
import requestLogger from "./common/middleware/request-logger";
import { routeProduct } from "./routes/product.route";

const logger = pino({ name: "server start" });
const app: Express = express();
const errorHandler = new ErrorHandle();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);
app.use(errorHandler.handle);
app.use(requestLogger);

app.use("/product", routeProduct);
export { app, logger };