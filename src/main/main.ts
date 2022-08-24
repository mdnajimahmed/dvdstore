import * as express from "express";
import * as awsServerlessExpress from "aws-serverless-express";
import routes from "./controller";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import getDbConnection from "./utils/db-connection";

var httpContext = require("express-http-context");

let server;
let dataSource;


const startServer = async () => {
  if (!server) {
    server = express();
    server.use(httpContext.middleware);
    applyMiddleware(middleware, server);
    applyRoutes(routes, server);
    dataSource = await getDbConnection();
  }
  return server;
};

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const server = await startServer();
  const app = awsServerlessExpress.createServer(server);
  return awsServerlessExpress.proxy(app, event, context, "PROMISE").promise;
};
