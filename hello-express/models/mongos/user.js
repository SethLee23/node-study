
const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true, index: 1 },
  age: { type: Number, min: 0, max: 120 },
  // subscriptions: { type }
});
const userModel = mongoose.model('user', userSchema);

async function insert(name, age) {
  const u = await userModel.create({ name, age });
  return u;
}
async function getOneById(userId) {
  console.log('_id', userId);
  const u = await userModel.findOne({ _id: userId });
  console.log(u);
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
};
