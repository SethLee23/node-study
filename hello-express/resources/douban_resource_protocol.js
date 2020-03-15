/* eslint-disable no-useless-constructor */
const Resource = require('./resource_protocol');

class DoubanNoteResource extends Resource {
  constructor() {
    super();
  }

  static genUUID(oriThirdParty) {
    return `${DoubanNoteResource.UUID_PREF}${oriThirdParty}`;
  }

  static get ['UUID_PREF']() {
    return 'https://douban.com/note';
  }

  static getOriginalThirdPartyId(UUID) {
    return UUID.split(DoubanNoteResource.UUID_PREF)[1];
  }

  static getIdByUUID() {

  }

  static getUUIDById() {

  }

}
