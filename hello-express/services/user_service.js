const User = require('../models/in_memo/user')
const Subscription = require('../models/in_memo/subscription')
module.exports.getAllUsers = function () {
    return User.list()
} 
module.exports.addNewUser = function (name,age) {
    return User.insert(name,age)
} 
module.exports.getUserByUserId = function (userId) {
    return User.getOneById(userId)
} 
module.exports.createSubsription = function (userId,url) {
    const user = User.getOneById(userId)
    if(!user) throw Error('no such user!')
    return Subscription.insert(userId,url)
} 