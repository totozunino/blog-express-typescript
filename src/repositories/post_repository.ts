import { Post } from "@/models/post";

export const findAll = async (): Promise<Post[]> => {
  return await Post.query();
};

export const create = async (post: Partial<Post>): Promise<Post> => {
  return await Post.query().insert(post);
};
