const express = require('express')
const router = express.Router()
const SportRoute = require('./sport.route')
const UserRoute = require('./user.route')

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
let config = require('../config/jwt.config');

var User = require('../model/user.model')
var opts = {};
opts.secretOrKey = config.secret;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");

passport.use(new JwtStrategy(opts, function (payload, done){
    User.findById(payload.id, function(err, user) {
        console.log('current user')
        console.log(user)
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
}))

router.use('/sport', SportRoute)
router.use('/user', UserRoute)




module.exports = router