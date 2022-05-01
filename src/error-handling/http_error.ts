export enum HttpCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  INTERNAL_SERVER = 500,
}

export class HttpError extends Error {
  public status!: HttpCode;

  constructor(message: string, statusCode: HttpCode, description: string) {
    super(description);
    this.message = message;
    this.status = statusCode;
  }
}
