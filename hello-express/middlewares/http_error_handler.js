const HTTPBaseError = require('../errors/http_base_error');
const logger = require('../winston_demo');

function handler(options) {
  // eslint-disable-next-line func-names
  return function (err, req, res, next) {
    if (err instanceof HTTPBaseError) {
      const errMeta = {
        query: req.query,
        url: req.originalUrl,
      };
      logger.error(err.message, errMeta);
      res.statusCode = err.httpStatusCode;
      res.json({
        code: err.errCode,
        msg: err.httpMsg,
        hello: 'world',
      });
    } else {
      next(err);
    }
  };
}
module.exports = handler;
