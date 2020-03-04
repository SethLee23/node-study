const users = []
module.exports = class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    // 相当于 User.users
    static get ['users'](){
        return users
    }
    static list(query){
        return User.users
    }
    static insert(name,age){
        const u = new User(name,age)
        User.users.push(u)
    }
    static getOneByName(name){
       return  User.users.find(item=>item.name === name)
    }

}