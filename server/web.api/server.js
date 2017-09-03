const express = require('express');
const routes = require('./routes');
const bodyParser =require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

module.exports = app;