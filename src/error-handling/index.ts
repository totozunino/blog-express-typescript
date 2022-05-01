import { ErrorRequestHandler } from "express";
import { HttpCode, HttpError } from "./http_error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).send(err);
  } else {
    res.status(HttpCode.INTERNAL_SERVER).send({ message: "Something went wrong", code: HttpCode.INTERNAL_SERVER });
  }
};
