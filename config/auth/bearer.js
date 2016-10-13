'use strict';

const passport = require("passport");
const cn = require('co-nextware');
const BearerStrategy = require('passport-http-bearer').Strategy;

/**
 * Expose
 */

passport.use(new BearerStrategy(cn(check)));
module.exports = passport.authenticate('bearer', {session: false});

/**
 * Implements
 */

function *check(token, done){
    logger.info('Bearer check: token:', token);
    if(token == 'undefined') return done('Empty token');

    // return user object
    return done(null, {username: 'myName'});

}
