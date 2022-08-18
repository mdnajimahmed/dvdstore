import { formatMessage } from "./log-formatter";

const winston = require("winston");
const logLevel = process.env.LOG_LEVEL || "info";
const winstonLogger = winston.createLogger({
  level: logLevel,
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

const logger = {
  log: function (level, message) {
    winstonLogger.log(level, formatMessage(message));
  },
  error: function (message) {
    winstonLogger.error(formatMessage(message));
  },
  warn: function (message) {
    winstonLogger.warn(formatMessage(message));
  },
  info: function (message) {
    winstonLogger.info(formatMessage(message));
  },
  http: function (message) {
    winstonLogger.http(formatMessage(message));
  },
  verbose: function (message) {
    winstonLogger.verbose(formatMessage(message));
  },
  debug: function (message) {
    winstonLogger.debug(formatMessage(message));
  },
  silly: function (message) {
    winstonLogger.silly(formatMessage(message));
  },
};

export default logger;
