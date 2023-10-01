const TimePeriod = require('./timePeriods');
const Dinosaur = require('./Dinosaurs');
const Continent = require('./Continents');
const Diets = require('./Diets');

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

module.exports = { 
    TimePeriod,
    Dinosaur,
    Continent,
    Diets,
}