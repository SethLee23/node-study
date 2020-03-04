const users = []

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.id = User.id++
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
        return u
    }
    static getOneByName(name){
       return  User.users.find(item=>item.name === name)
    }
    static getOneById(userId){
       return  User.users.find(item=>item.id === Number(userId))
    }

}
User.id = 0
module.exports =  User