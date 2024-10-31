import "express-async-errors";
import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";
import { env } from "@/common/utils/envConfig";



const logger = pino({ name: "server start" });
const app: Express = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());

export { app, logger };