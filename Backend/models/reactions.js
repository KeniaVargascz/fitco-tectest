const { Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user'); 

class Reactions extends Model {}
Reactions.init({
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    publication_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    value: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Reactions',
    tableName: 'publication_user_reactions',
    timestamps: false, 
    schema: 'smcwi', 
});
Reactions.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'User' });

module.exports = Reactions;
