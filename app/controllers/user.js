'use strict';

const cn = require('co-nextware');
const User = require('config/db').models.User;

/**
 * Expose
 */

module.exports = {
    list: cn(list),
};

/**
 * Implements
 */

function *list(req, res, next){
    if(!req.user) return res.fail('Empty user object');

    const users = yield User.findAll();

    res.ok(users);
}
