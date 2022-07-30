var httpContext = require("express-http-context");
export const formatMessage = (message) => {
  const api = httpContext.get("api");
  const user = httpContext.get("user");
  return `[${httpContext.get(
    "lambdaRequestId"
  )}] [${user}] [${api}] 🐛 ${message}`;
};
