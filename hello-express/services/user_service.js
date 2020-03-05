const User = require('../models/in_memo/user');

const Subscription = require('../models/in_memo/subscription');

module.exports.getAllUsers = () => User.list();
module.exports.addNewUser = (name, age) => User.insert(name, age);
module.exports.getUserByUserId = (userId) => User.getOneById(userId);
module.exports.createSubsription = (userId, url) => {
  const user = User.getOneById(userId);
  if (!user) throw Error('no such user!');
  return Subscription.insert(userId, url);
};
