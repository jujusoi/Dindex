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
    kingdom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phylum: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    order: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    suborder: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    family_from: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'family',
            key: 'id',
        },
    },
    genus: {
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
    introduction: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    physicality: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    diet_description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    habitat: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    behaviour: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fossils: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    profile_image: {
        type: DataTypes.STRING(1000),
        allowNull: false,
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