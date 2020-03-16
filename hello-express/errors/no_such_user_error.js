const HTTPBaseError = require('../errors/http_base_error');

const ERROR_CODE = 3000001;
class NoSuchUserError extends HTTPBaseError {
  constructor(msg) {
    super(404, '找不到用户', ERROR_CODE, `can't find user:${msg}`);
  }
}
module.exports = NoSuchUserError;
