import { Model } from "objection";

export class Notification extends Model {
  readonly id!: string;
  createdAt!: Date;
  title!: string;

  static get tableName(): string {
    return "notifications";
  }
}
