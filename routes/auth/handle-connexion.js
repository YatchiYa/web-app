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


exports.register = function (req, res) {
    console.log("server 1 ")

    const { errors, isValid } = validateRegisterInput(req.body);

    console.log("server 2 ")
    if(!isValid) {
        console.log("server 2.2 ")
        return res.status(400).json(errors);
    }
    
    console.log("server 3 ")
    User.findOne({
        email: req.body.email
    }).then(user => {
        
        console.log("server 4 ")
        if(user) {
            console.log("server 4.4 ")
            return res.status(400).json({
                email: 'Email already exists'
            });
        }
        else {
            console.log("server 5 ")
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                guilde: 'N/A',
                grades: 'Vagabon',
                rank: 0,
                level: 1,
                expValue: 0
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    const payload = {
                                        id: user._id,
                                        name: user.username,
                                    }
                                    res.json({
                                        token: jwt.sign(payload, settings.secret, {
                                            expiresIn: 3600
                                        }),
                                        userID : user._id,
                                        username : user.username,
                                    })
                                }); 
                        }
                    });
                }
            });
        }
    });
}

exports.login = function (req, res) {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username})
        .then(user => {
            if(!user) {
                errors.username = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user._id,
                                name: user.username,
                            }
                            jwt.sign(payload, settings.secret, {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `${token}`,
                                        userID : user._id,
                                        username : user.username
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
}


















/*
router.post('/register', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'Email already exists'
            });
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                }); 
                        }
                    });
                }
            });
        }
    });
});



router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username})
        .then(user => {
            if(!user) {
                errors.username = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user._id,
                                name: user.username,
                            }
                            jwt.sign(payload, settings.secret, {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `${token}`,
                                        userID : user._id,
                                        username : user.username
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
});


router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;
*/