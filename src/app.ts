import express from "express";
import { initDB } from "./database";
import { registerRoutes } from "./controllers";

export const app = express();

app.use(express.json());

registerRoutes(app);

initDB();
