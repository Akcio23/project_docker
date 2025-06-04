const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'user', 'password', {
  host: 'mysql',
  dialect: 'mysql'
});

module.exports = sequelize;
