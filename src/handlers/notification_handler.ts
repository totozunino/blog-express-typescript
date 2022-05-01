import { RequestHandler } from "express";
import { getAllNotifications } from "@/services/notification_service";
import { HttpCode } from "@/error-handling/http_error";

const getHandler: RequestHandler = async (req, res, next) => {
  try {
    const notifications = await getAllNotifications();
    res.status(HttpCode.OK).json({ data: notifications });
  } catch (error) {
    next(error);
  }
};

export { getHandler };
