


const express = require('express');
const app = express();
const router = express.Router();

// routes collections "users"
var auth = require('./handle-connection/handle-connection');
var users = require('./users-details/users');
// var tools = require('./tools/tools');
var pres = require('./presentations/pres');

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/tools', users);
app.use('/api/pres', pres);


module.exports = app;