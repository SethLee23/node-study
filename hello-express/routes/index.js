const express = require('express');

const router = express.Router();
const UserService = require('../services/user_service');
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express', h1: 'h11111' });
});
router.post('/login', (req, res, next) => {
  (async () => {
    const { username, password } = req.body;
    const result = await UserService.loginWidthNamePass(username, password);
    // res.json(result);
    return result;
  })().then((result) => {
    res.json(result);
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
