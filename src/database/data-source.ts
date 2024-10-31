import "reflect-metadata";
import { DataSource } from "typeorm";

import { env } from "@/common/utils/envConfig";

const { DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } =
  env;

export const AppDataSource = new DataSource({
  type: DB_TYPE as any,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
  logging: true,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  entities: ["**/entities/**/*.{ts,js}"],
  migrationsRun: true,
  migrations: ["**/migrations/**/*.{ts,js}"],
});
