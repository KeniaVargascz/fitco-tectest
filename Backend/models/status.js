const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Status extends Model {}
Status.init({
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false 
  }
}, {
  sequelize,
  modelName: 'Status',
  tableName: 'status', 
  schema: 'smcwi', 
  timestamps: false
});

module.exports = Status;
