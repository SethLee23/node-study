class HttpBaseError extends Error {
  constructor(httpStatusCode, httpMsg, errCode, msg) {
    super(`HTTP ERROR: ${msg}`);
    this.httpStatusCode = httpStatusCode;
    this.httpMsg = httpMsg;
    this.msg = msg;
  }
}
module.exports = HttpBaseError;
// try {
//   throw new HttpBaseError(404, '资源不存在', '10000', 'resource not found');
// } catch (e) {
//   console.log('e.msg', e.msg);
//   console.log(e.httpStatusCode);
//   logger.error('Unhandled Rejection at:', e.msg, 'reason:', e.httpStatusCode);
// }
