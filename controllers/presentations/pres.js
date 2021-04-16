

const express = require('express');
const router = express.Router();
const passport = require('passport');

// routes collections "users"
var pres = require('../../routes/presentations/pres');

router.route('/new').post(pres.newPres)


module.exports = router;
