'use strict';

const user = require('app/controllers/user');
const router = require('express').Router();

/**
 * Expose
 */

module.exports = function(app, auth){
    console.log('user routes ...');

/**
 * Routes
 */

    router.get('/users', auth.basic, user.list);

    return router;
};
