import { Post } from "../models/post";
import { findAll, create } from "../repositories/post_repository";
import { connect } from "amqplib";

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await findAll();
  return posts;
};

export const createPost = async (post: Partial<Post>): Promise<Post> => {
  const createdPost = await create(post);

  const connection = await connect("amqp://localhost");

  const channel = await connection.createChannel();

  await channel.assertQueue("NotificationsQueue");

  const notification = JSON.stringify({ title: post.title });

  channel.sendToQueue("NotificationsQueue", Buffer.from(notification));

  return createdPost;
};
