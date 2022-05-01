import { RequestHandler } from "express";
import { createPost, getAllPosts } from "@/services/post_service";
import { HttpCode } from "@/error-handling/http_error";

const getHandler: RequestHandler = async (req, res, next) => {
  try {
    const posts = await getAllPosts();
    res.status(HttpCode.OK).json({ data: posts });
  } catch (error) {
    next(error);
  }
};

const postHandler: RequestHandler = async (req, res, next) => {
  try {
    const post = await createPost(req.body);
    res.status(HttpCode.CREATED).json({ data: post });
  } catch (error) {
    next(error);
  }
};

export { getHandler, postHandler };
