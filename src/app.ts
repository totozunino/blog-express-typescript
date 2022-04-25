import express from "express";
import { initDB } from "./database";
import postsRoute from "./controllers/post_controller";

export const app = express();

app.use(express.json());

app.use("/posts", postsRoute);

initDB();
