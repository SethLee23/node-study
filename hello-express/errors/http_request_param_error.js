const HTTPBaseError = require('./http_base_error');
// const winston = require('../winston_demo');
const ERROR_CODE = 40000;
class HTTPReqParamError extends HTTPBaseError {
  constructor(paramName, desc) {
    super(200, `参数不合法${desc}`, ERROR_CODE, `${paramName} wrong: ${desc}`);
  }
}
module.exports = HTTPReqParamError;
