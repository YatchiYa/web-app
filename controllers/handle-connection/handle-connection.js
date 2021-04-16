

const express = require('express');
const router = express.Router();
const passport = require('passport');

// routes collections "users"
var auth = require('../../routes/auth/handle-connexion');

router.route('/login').post(auth.login)
router.route('/register').post(auth.register)

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    });
});



module.exports = router;
