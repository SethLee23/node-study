var express = require('express');
var router = express.Router();
const UserService = require('../services/user_service')
/* GET home page. */
router.get('/', function (req, res) {
    // const User = require('../models/in_memo/user')
    // 
    // const newUser = new User(name, age)
    // User.insert(name,age)
    // console.log('User.list',User.list())

    const users = UserService.getAllUsers()
    res.json(users)
    console.log(users)
    // res.render('user', { name: newUser.getName(), age: newUser.getAge() });
    //   打断当前，不会进入下一个
    // next()
});
router.post('/', function (req, res) {
    const {name,age} = req.body
    const u =UserService.addNewUser(name, age)
    res.json(u)

})

module.exports = router;
