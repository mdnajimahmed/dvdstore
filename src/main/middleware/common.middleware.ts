import { Router } from "express";
var httpContext = require("express-http-context");

/**
 * Request scope lambda function execution.
 * @param router Express standard router object.
 */
export const httpContextExtractor = (router: Router) => {
  router.use(async (req, res, next) => {
    const apiGatewayContextRaw = req?.headers["x-apigateway-context"] as string;
    const apiGatewayContext = JSON.parse(
      decodeURIComponent(apiGatewayContextRaw)
    );
    const awsRequestId = apiGatewayContext.awsRequestId;
    httpContext.set("api", req.url);
    httpContext.set("user", "najim.ju@gmail.com");
    httpContext.set("lambdaRequestId", awsRequestId);
    next();
  });
};

/**
 * Enhance response message by adding lambda ID in the response.
 * @param router Express standard router object.
 */
export const responseHeaderEnhancer = (router: Router) => {
  router.use(async (req, res, next) => {
    res.set("x-app-lambda-request-id", httpContext.get("lambdaRequestId"));
    next();
  });
};
