import { QueryBuilder } from "objection";
import { Post } from "../models/post";

export const findAll = (): QueryBuilder<Post, Post[]> => {
  return Post.query();
};
