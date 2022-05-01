import { Router } from "express";
import { getHandler } from "@/handlers/notification_handler";

const route = Router();

route.get("/", getHandler);

export default route;
