const TimePeriod = require('./timePeriods');
const Dinosaur = require('./Dinosaurs');
const Continent = require('./Continents');
const Diets = require('./Diets');
const Family = require('./Families');
const IntroductionImages = require('./introductionImages');
const PhysicalityImages = require('./physicalityImages');

TimePeriod.hasMany(Dinosaur, {
    foreignKey: 'period',
});

Dinosaur.belongsTo(TimePeriod, {
    foreignKey: 'period',
});

Continent.hasMany(Dinosaur, {
    foreignKey: 'continent_on',
});

Dinosaur.belongsTo(Continent, {
    foreignKey: 'continent_on',
});

Diets.hasMany(Dinosaur, {
    foreignKey: 'diet_on',
});

Dinosaur.belongsTo(Diets, {
    foreignKey: 'diet_on',
});

Family.hasMany(Dinosaur, {
    foreignKey: 'family_from',
});

Dinosaur.belongsTo(Family, {
    foreignKey: 'family_from',
});

Dinosaur.hasMany(IntroductionImages, {
    foreignKey: 'dinosaur_reference',
    onDelete: 'CASCADE',
});

IntroductionImages.belongsTo(Dinosaur, {
    foreignKey: 'dinosaur_reference',
});

Dinosaur.hasMany(PhysicalityImages, {
    foreignKey: 'dinosaur_reference',
    onDelete: 'CASCADE',
});

PhysicalityImages.belongsTo(Dinosaur, {
    foreignKey: 'dinosaur_reference',
});

module.exports = { 
    TimePeriod,
    Dinosaur,
    Continent,
    Diets,
    Family,
    IntroductionImages,
    PhysicalityImages,
}