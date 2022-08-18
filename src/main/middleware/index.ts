import {
  httpContextExtractor,
  responseHeaderEnhancer,
} from "./common.middleware";

export default [httpContextExtractor, responseHeaderEnhancer];
