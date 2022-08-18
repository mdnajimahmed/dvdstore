import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
/**
 * The GET method for Greet.
 * @param req the http request object.
 * @param resp the http request object.
 * @param next the classic chaining mechanism of express.
 */
async function greetHello(req: Request, resp: Response, next: NextFunction) {
  try {
    logger.error(`Request body = ${JSON.stringify(req.query)}`)
    logger.error("This is error log");
    logger.warn("This is warn log");
    logger.info("This is info log");
    logger.http("This is http log");
    logger.verbose("This is verbose log");
    logger.debug("This is debug log");
    logger.silly("This is silly log");
    resp.send("Hello " + req?.query?.name);
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
