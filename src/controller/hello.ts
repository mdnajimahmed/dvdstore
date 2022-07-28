import { Request, Response, NextFunction } from "express";
import { handler } from "../main";

async function greetHello(req: Request, resp: Response, next: NextFunction) {
  try {
    resp.send("Hello");
  } catch (err) {
    next(err);
  }
}

export default [
  {
    path: "/hello",
    method: "get",
    handler: [greetHello],
  },
];
