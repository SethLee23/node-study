const express = require('express');

const router = express.Router();
const UserService = require('../services/user_service');
/* GET home page. */
router.get('/', (req, res) => {
  (async () => {
    const users = await UserService.getAllUsers();
    res.json(users);
  })();
});
router.post('/', (req, res) => {
  (async () => {
    const { name, age } = req.body;
    const u = await UserService.addNewUser(name, age);
    res.json(u);
  })();
});
router.get('/:userId', (req, res) => {
  (async () => {
    const users = await UserService.getUserByUserId(req.params.userId);
    console.log('users', users);
    res.json(users);
  })();
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
