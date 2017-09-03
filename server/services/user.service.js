const userRepository = require('../data/user.repository');

module.exports = {

    getAll() {
    },
    add(user) {
        userRepository.add(user);
    }

};