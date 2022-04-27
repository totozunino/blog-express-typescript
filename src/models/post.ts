import { Model } from "objection";

export class Post extends Model {
  readonly id!: string;
  createdAt!: Date;
  title!: string;
  content!: string;

  static get tableName(): string {
    return "posts";
  }
}
