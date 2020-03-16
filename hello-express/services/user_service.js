const JWT = require('jsonwebtoken');
const JWTConfig = require('../cipher/password_config');

const User = require('../models/mongos/user');
const HTTPRequestParamError = require('../errors/http_request_param_error');
const NoSuchUserError = require('../errors/no_such_user_error');

const Subscription = require('../models/in_memo/subscription');

module.exports.getAllUsers = async () => {
  const u = await User.list();
  return u;
};
// 注册
module.exports.addNewUser = async (user) => {
  console.log(222);
  if (!user || !user.username || !user.password || !user.name) throw new HTTPRequestParamError('user', '用户名或密码不能为空', 'empty userNameOrPassword');
  const u = await User.createUserByNamePass(user);
  return u;
};
// 登录 (生成token返回)
module.exports.loginWidthNamePass = async (username, password) => {
  if (!username || !password) throw new HTTPRequestParamError('user', '用户名或密码不能为空', 'empty userNameOrPassword');
  const foundUser = await User.getUserByNamePass(username, password);
  if (!foundUser) { throw NoSuchUserError('找不到该用户'); }
  const token = JWT.sign({
    // eslint-disable-next-line no-underscore-dangle
    _id: foundUser._id.toString(),
    expireAt: Date.now().valueOf + JWTConfig.expireIn,
  }, JWTConfig.SECRET);
  return {
    token,
    user: foundUser,
  };
};
module.exports.getUserByUserId = async (userId) => {
  const u = await User.getOneById(userId);
  return u;
};
module.exports.createSubsription = async (userId, url) => {
  const user = Subscription.getOneByUserId(userId);
  if (!user) throw Error('no such user!');
  const u = await Subscription.insert(userId, url);
  return u;
};
