var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function (req, res, next) {
    console.log('mw1');
    res.render('index', { title: 'helloRouter', h1: "我是h1" });
    //   打断当前，不会进入下一个
    next('router');
    // next()
});
router.use('/', function (req,res) {
    console.log('mw2');
    res.render('index', { title: 'helloRouter', h1: "我是h1" });
    //   打断当前，不会进入下一个
    // next('router')
});

module.exports = router;
