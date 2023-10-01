const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TimePeriod extends Model {};

TimePeriod.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    period_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brief_description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    evolution: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    environment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tectonic_activity: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    geological_events: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'time_period',
});

module.exports = TimePeriod;