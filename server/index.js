const webapi = require('./web.api/server');

webapi.listen(3050, () => {
    console.log('web api running on port 3050');
});