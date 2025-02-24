const { Model } = require('sequelize');
const sequelize = require('../config/database'); 

class User extends Model {}
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  sequelize,               
  modelName: 'User',       
  tableName: 'users',      
  schema: 'smcwi',        
  timestamps: false       
});

module.exports = User;
