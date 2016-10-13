'use strict';

const config = require('config/config');
const Sequelize = require('sequelize');

const fs = require("fs");
const dirname = 'app/models';

console.log('Config db(sequelize) ...');

const sequelize = new Sequelize(config.db);

fs.readdirSync(dirname)
    .forEach(function(file) {
        if(file.indexOf(".") === 0) return;
        const schema = require(`${dirname}/${file}`);
        const modelName = file.replace('.js', '');
        sequelize.define(modelName, schema);
    });

/**
 * Expose
 */

module.exports = sequelize;
