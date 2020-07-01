const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const User = require("../model/User");
const Address = require("../model/Address");
const Tech = require("../model/Tech");

const connection = new Sequelize(dbconfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

// connection.models has all models of init methods above
User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;