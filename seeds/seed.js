const sequelize = require('../config/connection');

const { TimePeriod, Dinosaur, Continent } = require('../models');

const timeperiodseeddata = require('./timeperiodinfo.json');
const dinosaurseeddata = require('./dinosaurinfo.json');
const continentseeddata = require('./continentInfo.json');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        await TimePeriod.bulkCreate(timeperiodseeddata);
        await Continent.bulkCreate(continentseeddata);
        await Dinosaur.bulkCreate(dinosaurseeddata);
        
        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};

seed();