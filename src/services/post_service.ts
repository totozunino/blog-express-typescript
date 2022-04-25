import { Post } from "../models/post";
import { findAll } from "../repositories/post_repository";

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await findAll();
  return posts;
};
