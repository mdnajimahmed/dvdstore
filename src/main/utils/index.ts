import { Router } from "express";
import { Request, Response, NextFunction } from "express";
export type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    router[method](path, handler);
  }
};
