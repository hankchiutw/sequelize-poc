"use strict";

const Sequelize = require('sequelize');

module.exports = {
    username: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false }
};
