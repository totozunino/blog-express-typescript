import { config } from "dotenv";
import { knexSnakeCaseMappers } from "objection";
import { Knex } from "knex";

config();

export const Config = {
  database: {
    develop: {
      client: "pg",
      connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "docker",
        database: process.env.DB_NAME || "blog",
        charset: "utf8",
      },
      ...knexSnakeCaseMappers(),
    },
  } as Record<string, Knex.Config>,
};
