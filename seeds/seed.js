const sequelize = require('../config/connection');

const { TimePeriod, Dinosaur, Continent, Diets, Family, IntroductionImages, PhysicalityImages } = require('../models');

const timeperiodseeddata = require('./timeperiodinfo.json');
const dinosaurseeddata = require('./dinosaurinfo.json');
const continentseeddata = require('./continentInfo.json');
const dietseeddata = require('./dietInfo.json');
const familyseeddata = require('./familyInfo.json');
const introData = require('./introImageinfo.json');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        await TimePeriod.bulkCreate(timeperiodseeddata);
        await Continent.bulkCreate(continentseeddata);
        await Diets.bulkCreate(dietseeddata);
        await Family.bulkCreate(familyseeddata);
        await Dinosaur.bulkCreate(dinosaurseeddata);
        await IntroductionImages.bulkCreate(introData);
        await PhysicalityImages.bulkCreate(introData);
        
        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};

seed();