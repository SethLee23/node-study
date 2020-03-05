const express = require('express');

const router = express.Router();
const UserService = require('../services/user_service');
/* GET home page. */
router.get('/', (req, res) => {
  const users = UserService.getAllUsers();
  res.json(users);
});
router.post('/', (req, res) => {
  const { name, age } = req.body;
  const u = UserService.addNewUser(name, age);
  res.json(u);
});
router.get('/:userId', (req, res) => {
  const users = UserService.getUserByUserId(req.params.userId);
  console.log('users', users);
  res.json(users);
});
router.post('/:userId/subscription', (req, res, next) => {
  try {
    const sub = UserService.createSubsription(req.params.userId, req.body.url);
    console.log('sub', sub, req.params.userId, req.body.url);
    res.json(sub);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
