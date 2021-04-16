// login.js

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    console.log("entred x " + data.username)
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isLength(data.username, { min: 2, max: 30 })) {
        errors.username = 'Name must be between 2 to 30 chars';
        console.log(errors.username)
    }

    if(Validator.isEmpty(data.username)) {
        errors.username = 'Name field is required';
        console.log(errors.username)
    }

    if(!Validator.isLength(data.password, {min: 2, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors)
    }
}