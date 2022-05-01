import { Router } from "express";
import { getHandler, postHandler } from "@/handlers/post_handler";

const route = Router();

route.get("/", getHandler);

route.post("/", postHandler);

export default route;
