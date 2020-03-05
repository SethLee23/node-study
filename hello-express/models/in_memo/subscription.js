const subsciptions = [];
module.exports = class Subsciption {
  constructor(userId, url) {
    this.id = userId;
    this.url = url;
  }

  static list() {
    return Subsciption.subsciptions;
  }

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
