import process from "node:process";
import { pino } from "pino";
import pretty from "pino-pretty";

const stream = pretty({
  levelFirst: true,
  colorize: true,
});

const logger = pino(
  {
    level: process.env.NODE_ENV === "development" ? "debug" : "info",
  },
  stream
);

export const customLogger = (message: string, ...rest: string[]) => {
  logger.info(message, ...rest);
};
