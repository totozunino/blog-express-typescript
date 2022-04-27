import { Post } from "../models/post";
import { findAll, create } from "../repositories/post_repository";

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await findAll();
  return posts;
};

export const createPost = async (post: Partial<Post>): Promise<Post> => {
  const createdPost = await create(post);
  return createdPost;
};
