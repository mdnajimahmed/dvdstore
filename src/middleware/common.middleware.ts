import { Router } from "express";

export const responseHeaderEnhancer = (router: Router) => {
  router.use(async (req, res, next) => {
    const apiGatewayContextRaw = req?.headers["x-apigateway-context"];
    const apiGatewayContext = JSON.parse(
      decodeURIComponent(apiGatewayContextRaw)
    );
    const awsRequestId = apiGatewayContext.awsRequestId;
    res.set("x-app-lambda-request-id", awsRequestId);
    next();
  });
};
