import knex from "knex";
import { Model } from "objection";
import { Config } from "@/config/index";

export const initDB = (): void => {
  const knexInstance = knex(Config.database[process.env.NODE_ENV || "develop"]);
  Model.knex(knexInstance);
};
