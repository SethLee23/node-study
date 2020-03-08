const winston = require('winston');
require('winston-daily-rotate-file');

const { transports } = winston;
const { Console, DailyRotateFile } = transports;

const logger = winston.createLogger({
  transports: [
    new Console(),
    new DailyRotateFile({
      name: 'base_logger',
      filename: './logs/info.',
      datePattern: 'yyyy-MM-dd',
      level: 'info',
    }),
    new DailyRotateFile({
      name: 'error_logger',
      filename: './logs/error.',
      datePattern: 'yyyy-MM-dd',
      level: 'error',
    }),
  ],
});

module.exports = logger;
