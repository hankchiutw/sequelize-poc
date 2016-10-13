'use strict';

const passport = require("passport");
const cn = require('co-nextware');
const LocalStrategy = require('passport-local').Strategy;

const config = require('config/config');

/**
 * Expose
 */

passport.use(new LocalStrategy(cn(check)));
module.exports = passport.authenticate('local', {session: false});

/**
 * Implements
 */

function *check(username, password, done){
    logger.info('Local auth check: ');

    return done(null, 'hi');
}
