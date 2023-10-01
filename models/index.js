const TimePeriod = require('./timePeriods');
const Dinosaur = require('./Dinosaurs');
const Continent = require('./Continents');

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

module.exports = { 
    TimePeriod,
    Dinosaur,
    Continent,
}