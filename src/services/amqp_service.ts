import { Channel, connect } from "amqplib";

const QUEUE = "NotificationsQueue";

export const createAmqpConnection = async (): Promise<Channel> => {
  const connection = await connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertQueue(QUEUE);

  return channel;
};

export const publishToQueue = (data: string): void => {
  const amqpClient = AmqpClient.getInstance();
  amqpClient._channel.sendToQueue(QUEUE, Buffer.from(data));
};

export class AmqpClient {
  private static _instance: AmqpClient;
  public _channel!: Channel;

  private constructor() {
    // empty implementation
  }

  static getInstance(): AmqpClient {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new AmqpClient();
    return this._instance;
  }

  public set channel(channel: Channel) {
    this._channel = channel;
  }
}
