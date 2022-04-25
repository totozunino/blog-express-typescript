import { Model } from "objection";

export class Post extends Model {
  readonly id!: number;
  createdAt!: Date;
  title!: string;
  content!: string;

  static get tableName(): string {
    return "posts";
  }
}
