import express from "express";
import awsServerlessExpress from "aws-serverless-express";
import routes from "./controller";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";

let server;

const startServer = async () => {
  if (!server) {
    server = express();
    applyMiddleware(middleware, server);
    applyRoutes(routes, server);
  }
  return server;
};

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.debug("Starting server...");
  const server = await startServer();
  console.debug("Successfully started server");
  const app = awsServerlessExpress.createServer(server);
  return awsServerlessExpress.proxy(app, event, context, "PROMISE").promise;
};
// asd;
