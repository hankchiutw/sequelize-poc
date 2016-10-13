'use strict';

const passport = require("passport");
const verifyBearer = require('config/auth/bearer');
const verifyLocal = require('config/auth/local');
const verifyCustom = require('config/auth/custom');

console.log('Config auth ...');

module.exports = {
    initialize: function(){ return passport.initialize(); },
    verifyBearer,
    verifyLocal,
    verifyCustom,
    basic: [ verifyBearer, verifyCustom ]
};

