const User = require('./schemas/user');

module.exports = {
    getAll() {

    },
    add(user) {
        const userToAdd = new User(user);
        userToAdd.save();
    },
    save(user){


    }

};