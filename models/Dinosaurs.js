const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dinosaur extends Model {};

Dinosaur.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    dinosaur_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    period: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'time_period',
            key: 'id',
        },
    },
    continent_on: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'continent',
            key: 'id',
        },
    },
    diet_on: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'diet',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dinosaur',
},
);

module.exports = Dinosaur;