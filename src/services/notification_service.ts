import { Notification } from "@/models/notification";
import { findAll } from "@/repositories/notification_repository";

export const getAllNotifications = async (): Promise<Notification[]> => {
  const notifications = await findAll();
  return notifications;
};
