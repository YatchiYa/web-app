// user.js

const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const settings = require('../../config');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/user/user');


exports.view = function (req, res) {


    const id = req.body.id;

    User.findOne({_id : id})
        .then(user => {
            if(!user) {
                errors.username = 'User not found'
                return res.status(404).json(errors);
            }
            return res.json({
                userID : user._id,
                username : user.username,
                grades: user.grades,
                guilde: user.guilde,
                rank: user.rank,
                expValue: user.expValue,
                level: user.level
            });
        })
        .catch(err => {
            return res.status(404).send()
        });
}
