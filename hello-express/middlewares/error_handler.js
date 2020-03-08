const logger = require('../winston_demo');

function handler(options) {
  return function (err, req, res, next) {
    logger.error('uncaught error in the middleware process', err);
  };
}

module.exports = handler;
