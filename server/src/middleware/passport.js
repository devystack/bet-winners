let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
let config = require('../config/jwt.config'); // get db config file

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('passport is called')
    // User.findOne({id: jwt_payload.id}, function(err, user) {
    //       if (err) {
    //           return done(err, false);
    //       }
    //       if (user) {
    //           done(null, user);
    //       } else {
    //           done(null, false);
    //       }
    //   });
  }));
};