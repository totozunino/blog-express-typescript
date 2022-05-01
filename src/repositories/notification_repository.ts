import { Notification } from "@/models/notification";

export const findAll = async (): Promise<Notification[]> => {
  return await Notification.query();
};
