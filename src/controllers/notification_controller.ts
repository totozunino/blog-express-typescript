import { Router } from "express";
import { getAllNotifications } from "../services/notification_service";

const route = Router();

route.get("/", async (_request, response) => {
  try {
    const notifications = await getAllNotifications();
    response.json({ data: notifications });
  } catch (error) {
    console.log(error);
  }
});

export default route;
