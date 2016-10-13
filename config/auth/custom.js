'use strict';

const cn = require('co-nextware');

const config = require('config/config');

/**
 * Expose
 */

module.exports = function(req, res, next){
    logger.info('Custom auth check: ');
    // if auth failed
    // return next('error');
    next();
};
