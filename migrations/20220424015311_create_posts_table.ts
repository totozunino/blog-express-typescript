import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("posts", (tableBuilder) => {
    tableBuilder.increments("id").primary();
    tableBuilder.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    tableBuilder.string("title").notNullable();
    tableBuilder.string("content").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("posts");
}
