/*
 * @Author: Seth
 * @Date: 2020-03-06 20:31:22
 * @LastEditTime: 2020-03-06 20:41:11
 * @LastEditors: Please set LastEditors
 * @Description: 使用 mongoose 重新写 model 层
 * @FilePath: \hello-express\models\mongos\user.js
 */
// 1. 引入mongoose模块
const mongoose = require('mongoose');
// 2. 全局使用Promise库
mongoose.Promise = Promise;
// 3. 设置默认mongoose连接
const uri = 'mongodb://localhost:27017/dev1';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// 4. 监听相关事件
db.on('open', () => {
  console.log('mongo is connected111');
});
db.on('error', () => {
  console.log('mongo is on error');
});
