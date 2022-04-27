import { Router } from "express";
import { createPost, getAllPosts } from "../services/post_service";

const route = Router();

route.get("/", async (_request, response) => {
  try {
    const posts = await getAllPosts();
    response.json({ data: posts });
  } catch (error) {
    console.log(error);
  }
});

route.post("/", async (request, response) => {
  try {
    const post = await createPost(request.body);
    response.json({ data: post });
  } catch (error) {
    console.log(error);
  }
});

export default route;
