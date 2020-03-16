const HTTPBaseError = require('../errors/http_base_error');

const ERROR_CODE = 4010001;
class NoAuthError extends HTTPBaseError {
  constructor(token) {
    super(401, '没有权限访问该资源', ERROR_CODE, `no auth, token: ${token}`);
  }
}

module.exports = NoAuthError;
