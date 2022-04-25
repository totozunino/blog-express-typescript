import { Knex } from "knex";
import { knexSnakeCaseMappers } from "objection";

export default {
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
} as Knex.Config;
