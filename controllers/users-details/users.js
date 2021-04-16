

const express = require('express');
const router = express.Router();
const passport = require('passport');

// routes collections "users"
var user = require('../../routes/users-details/users');

router.route('/view').post(user.view)


module.exports = router;
