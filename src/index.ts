import express from "express";
import { Router, Request, Response } from "express";
import { config } from "dotenv";
import { initDB } from "./database";

config();

const app = express();

const route = Router();

const PORT = 3000;

app.use(express.json());

route.get("/", (_request: Request, response: Response) => {
  response.json({ message: "Hello world with Typescript" });
});

app.use(route);

initDB();

app.listen(PORT, () => `Server running on port ${PORT}!`);
