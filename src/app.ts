import express from "express";
import { initDB } from "./database";
import { registerRoutes } from "./routes";
import { errorHandler } from "@/error-handling/index";
import { AmqpClient, createAmqpConnection } from "./services/amqp_service";

export const app = express();

app.use(express.json());

registerRoutes(app);

app.use(errorHandler);

initDB();

const amqpClient = AmqpClient.getInstance();

createAmqpConnection()
  .then((_channel) => {
    amqpClient._channel = _channel;
  })
  .catch(() => process.exit());
