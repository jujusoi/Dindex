const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Families extends Model {};

Families.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    family_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    family_description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'family',
});

module.exports = Families;