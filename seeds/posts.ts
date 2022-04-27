import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("posts").del();

  // Inserts seed entries
  await knex("posts").insert([
    { title: "post 1", content: "content 1" },
    { title: "post 2", content: "content 2" },
    { title: "post 3", content: "content 3" },
  ]);
}
