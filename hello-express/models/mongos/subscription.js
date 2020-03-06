
const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const subSchema = new Schema({
  userId: { type: ObjectId, required: true, index: 1 },
  url: { type: String, required: true },
});
const subModel = mongoose.model('sub', subSchema);

async function insert(userId, url) {
  const u = await subModel.create({ userId, url });
  return u;
}
async function getOneByUserId(userId) {
  const u = await subModel.findOne({ userId });
  return u;
}
async function list() {
  const match = {};
  const flow = subModel.find(match);
  const u = await flow.exec();
  return u;
}
module.exports = {
  insert,
  getOneByUserId,
  list,
};
