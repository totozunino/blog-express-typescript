import knex from "knex";
import { Model } from "objection";
import config from "../../knexfile";

export const initDB = (): void => {
  const knexInstance = knex(config);
  Model.knex(knexInstance);
};
