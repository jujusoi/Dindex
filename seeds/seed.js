const sequelize = require('../config/connection');

const { TimePeriod } = require('../models');

const timeperiodseeddata = require('./timeperiodinfo.json');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        await TimePeriod.bulkCreate(timeperiodseeddata);
        
        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};

seed();