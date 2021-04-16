

const express = require('express');
const router = express.Router();
const passport = require('passport');

var tools = require('../../routes/tools/tools');

router.route('/getTools').post(tools.view)


module.exports = router;
