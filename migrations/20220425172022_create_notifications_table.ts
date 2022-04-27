import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("notifications", (tableBuilder) => {
    tableBuilder.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    tableBuilder.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    tableBuilder.string("title").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("notifications");
}
