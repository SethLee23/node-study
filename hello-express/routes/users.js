const express = require('express');

const UserService = require('../services/user_service');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
