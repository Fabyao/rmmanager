const defaultController = require('./controllers/default');
const userController =require('./controllers/user');


module.exports = (app) => {
    app.get('', defaultController.get);
    app.get('/api', defaultController.get);
    app.post('/api/users', userController.createUser);
};