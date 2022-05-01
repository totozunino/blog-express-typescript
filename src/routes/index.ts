import { Express } from "express";
import postsRoute from "@/routes/post_route";
import notificationsRoute from "@/routes/notification_route";

export const registerRoutes = (app: Express): void => {
  app.use("/posts", postsRoute);
  app.use("/notifications", notificationsRoute);
};
