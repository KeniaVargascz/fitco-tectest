// index file
const User = require('./user');
const Status = require('./status');
const Publication = require('./publication');
const Reactions = require('./reactions');
const { Sequelize } = require('sequelize');


module.exports = {
  User,
  Status,
  Publication,
  Reactions,
  Sequelize
};
