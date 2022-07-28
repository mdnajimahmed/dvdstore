import { Request, Response, NextFunction } from "express";

async function greetHello(req: Request, resp: Response, next: NextFunction) {
  try {
    console.log("req", req);
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
