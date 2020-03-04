var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function (req, res) {
    const User = require('../models/in_memo/user')
    const {name,age} = req.query
    const newUser = new User(name, age)
    User.insert(name,age)
    console.log('User.list',User.list())
   
    console.log('mw1');
    res.render('user', { name: newUser.getName(), age: newUser.getAge() });
    //   打断当前，不会进入下一个
    // next()
});

module.exports = router;
