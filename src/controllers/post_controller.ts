import { Router } from "express";
import { getAllPosts } from "../services/post_service";

const route = Router();

route.get("/", async (_request, response) => {
  try {
    const posts = await getAllPosts();
    response.json({ data: posts });
  } catch (error) {
    console.log(error);
  }
});

export default route;
