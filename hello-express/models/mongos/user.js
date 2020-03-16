
const mongoose = require('mongoose');

const pdkf2Async = require('util').promisify(require('crypto').pbkdf2);
const HTTPReqParamError = require('../../errors/http_request_param_error');
const PasswordConfig = require('../../cipher/password_config');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true, index: 1 },
  age: { type: Number, min: 0, max: 120 },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const userModel = mongoose.model('user', userSchema);

async function insert({ username, password, name }) {
  const u = await userModel.create({ username, password, name });
  console.log('创建用户', u);
  return u;
}
async function createUserByNamePass(user) {
  console.log(3333);
  const UserExist = await userModel.findOne({
    $or: [{ username: user.username }, { name: user.name }],
  }, { _id: 1 });
  console.log('exsist', UserExist);
  if (UserExist) throw new HTTPReqParamError('username', '这个用户名或昵称已被注册', 'duplicate username');
  const passToSave = await pdkf2Async(
    user.password, PasswordConfig.SALT,
    PasswordConfig.ITERATIONS, PasswordConfig.KEY_LENGTH, PasswordConfig.DIGEST,
  );
  console.log('passToSave', passToSave);
  const createdUser = await insert({
    username: user.username,
    password: passToSave,
    name: user.name,
  });
  return {
    // eslint-disable-next-line no-underscore-dangle
    _id: createdUser._id,
    username: createdUser.username,
    name: createdUser.name,
  };
}
async function getUserByNamePass(username, password) {
  const passToFind = await pdkf2Async(
    password, PasswordConfig.SALT, PasswordConfig.ITERATIONS, PasswordConfig.DIGEST,
  );
  const foundUser = await userModel.findOne({ username, password: passToFind }, { password: 0 });
  if (foundUser) return foundUser;
  throw new HTTPReqParamError('user', '用户名或密码错误', 'username or password wrong');
}
async function getOneById(userId) {
  const u = await userModel.findOne({ _id: userId });
  return u;
}
async function getOneByName(name) {
  const u = await userModel.findOne({ name });
  return u;
}
async function list() {
  const match = {};
  const flow = userModel.find(match);
  const u = await flow.exec();
  return u;
}
module.exports = {
  insert,
  getOneById,
  getOneByName,
  list,
  createUserByNamePass,
  getUserByNamePass,
};
