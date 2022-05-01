import { Post } from "@/models/post";
import { findAll, create } from "@/repositories/post_repository";
import { publishToQueue } from "@/services/amqp_service";

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await findAll();
  return posts;
};

export const createPost = async (post: Partial<Post>): Promise<Post> => {
  const createdPost = await create(post);

  const notification = JSON.stringify({ title: post.title });

  publishToQueue(notification);

  return createdPost;
};
