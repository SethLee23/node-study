const express = require('express');
const HTTPReqParamError = require('../errors/http_request_param_error');
const auth = require('../middlewares/auth');

const router = express.Router();
const UserService = require('../services/user_service');
/* GET home page. */
router.get('/', (req, res) => {
  (async () => {
    const users = await UserService.getAllUsers();
    res.json(users);
  })();
});
router.post('/', (req, res, next) => {
  (async () => {
    console.log(1111);
    const { username, password, name } = req.body;
    const u = await UserService.addNewUser({ username, password, name });
    res.json({ username, password, name });
  })().then((r) => { console.log(r); })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
router.get('/:userId', (req, res, next) => {
  (async () => {
    const { userId } = req.params;
    if (userId === '1212') throw new HTTPReqParamError('userId', '用户id不能为空', 'userid cant be empty');
    const users = await UserService.getUserByUserId(userId);
    console.log('users', users);
    res.json(users);
  })()
    .then((r) => { console.log(r); })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
router.post('/:userId/subscription', (req, res, next) => {
  (async () => {
    try {
      const sub = await UserService.createSubsription(req.params.userId, req.body.url);
      console.log('sub', sub, req.params.userId, req.body.url);
      res.json(sub);
    } catch (e) {
      next(e);
    }
  })();
});

module.exports = router;
