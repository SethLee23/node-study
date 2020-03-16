// 鉴权
// const UserService = require('../services/user_service');
const JWT = require('jsonwebtoken');
const JWTConfig = require('../cipher/jwt_config');
const NoAuthError = require('../errors/no_auth_error');

module.exports = (options) => (req, res, next) => {
  (async () => {
    const authorization = req.get('Authorization');
    if (!authorization || authorization.indexOf('Bearer') === -1) {
      throw new NoAuthError(null);
    }
    const token = authorization.split(' ')[1];
    if (!token) {
      throw new NoAuthError(null);
    }
    let user;
    try {
      user = JWT.verify(token, JWTConfig.SECRET);
    } catch (e) {
      throw NoAuthError(token);
    }
    req.user = user; // 不太理解这一块
  })()
    .then((r) => {
      console.log(r);
      next();
    })
    .catch((e) => {
      next(e);
    });
};
