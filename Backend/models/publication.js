const { Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user'); 
const Reactions = require('./reactions');

class Publication extends Model { }
Publication.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        visible: {
            type: DataTypes.BOOLEAN,
            defaultValue: true 
        }
    },
    {
        sequelize,
        modelName: 'Publication',
        tableName: 'publications',
        timestamps: false, 
        schema: 'smcwi',   
    }
);
Publication.hasMany(Reactions, {
    foreignKey: 'publication_id',
    as: 'reactions'
});
Publication.belongsTo(User, { foreignKey: 'user_id', as: 'user', targetKey: 'id' });

module.exports = Publication;
