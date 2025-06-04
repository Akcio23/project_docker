const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
});

module.exports = Item;
