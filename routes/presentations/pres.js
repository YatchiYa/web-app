// user.js

const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const settings = require('../../config');

const Pres = require('../../models/presentations/pres');


exports.newPres = function (req, res) {
    

    
    const newPres = new Pres({
        user: req.body.user,
        title: req.body.title,
        desc: req.body.desc,
        views: 0,
        responses: 0,
        comments: null
    });

    newPres
        .save()
        .then(resp => {
            res.json().send()
        })
        .catch(err => {
            res.status(404).send()
        })

}



