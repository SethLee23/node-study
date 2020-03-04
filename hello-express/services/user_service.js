const User = require('../models/in_memo/user')
module.exports.getAllUsers = function () {
    return User.list()
} 
module.exports.addNewUser = function (name,age) {
    return User.insert(name,age)
} 