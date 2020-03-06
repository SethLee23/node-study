const User = require('../models/mongos/user');

const Subscription = require('../models/in_memo/subscription');

module.exports.getAllUsers = async () => {
  const u = await User.list();
  return u;
};
module.exports.addNewUser = async (name, age) => {
  const u = await User.insert(name, age);
  return u;
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
