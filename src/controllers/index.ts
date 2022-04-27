import { Express } from "express";
import postsRoute from "./post_controller";
import notificationsRoute from "./notification_controller";

export const registerRoutes = (app: Express): void => {
  app.use("/posts", postsRoute);
  app.use("/notifications", notificationsRoute);
};
