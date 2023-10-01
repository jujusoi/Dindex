const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diets extends Model {};

Diets.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    diet_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    diet_description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'diet',
});

module.exports = Diets;