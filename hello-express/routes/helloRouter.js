var express = require('express');
var router = express.Router();
const UserService = require('../services/user_service')
/* GET home page. */
router.get('/', function (req, res) {
    const users = UserService.getAllUsers()
    res.json(users)
});
router.post('/', function (req, res) {
    const {name,age} = req.body
    const u = UserService.addNewUser(name, age)
    res.json(u)
})

module.exports = router;
