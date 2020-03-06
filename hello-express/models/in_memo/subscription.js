/*
 * @Author: your name
 * @Date: 2020-03-04 23:05:40
 * @LastEditTime: 2020-03-06 20:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello-express\models\in_memo\subscription.js
 */
const subsciptions = [];
module.exports = class Subsciption {
  constructor(userId, url) {
    this.id = userId;
    this.url = url;
  }

  static list() {
    return Subsciption.subsciptions;
  }

  /**
   * @description: 插入user
   * @param userId {type: Number}
   * @param url {type: String}
   * @return: Object
   */
  static insert(userId, url) {
    const s = new Subsciption(userId, url);
    subsciptions.push(s);
    console.log('subsciptions', subsciptions);
    return s;
  }

  static getOneByUserId(userId) {
    return Subsciption.subsciptions.map((item) => item.userId === userId);
  }

  static get ['subsciptions']() {
    return subsciptions;
  }
};
