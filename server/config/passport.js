const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const passport = require('passport');
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport) {
    let opts = {}; // options // before it was fromAuthHeader();
    opts.jwtFromRequest = ExtractJwt.fromHeader('Authorization');
    opts.secretOrKey = config.secret;
    console.log('this should happen early');
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
        User.getUserById(jwt_payload.username, (err, user) => {
            if (err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};
