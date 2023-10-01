const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IntroductionImages extends Model {};

IntroductionImages.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_reference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dinosaur_reference: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'dinosaur',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'introduction_images',
});

module.exports = IntroductionImages;