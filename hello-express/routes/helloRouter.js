var express = require('express');
var router = express.Router();
const UserService = require('../services/user_service')
/* GET home page. */
router.get('/', function (req, res) {
    const users = UserService.getAllUsers()
    res.json(users)
});
router.post('/', function (req, res) {
    const { name, age } = req.body
    const u = UserService.addNewUser(name, age)
    res.json(u)
})
router.get('/:userId', function (req, res) {
    const users = UserService.getUserByUserId(req.params.userId)
    console.log('users', users)
    res.json(users)
})
router.post('/:userId/subscription', function (req, res, next) {
    try {
        const sub = UserService.createSubsription(req.params.userId, req.body.url)
        console.log('sub', sub, req.params.userId, req.body.url)
        res.json(sub)
    } catch (e) {
        next(e)
    }

})

module.exports = router;
