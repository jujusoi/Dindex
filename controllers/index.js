const router = require('express').Router();
const { TimePeriod, Dinosaur, Continent, Diets, Family, IntroductionImages, PhysicalityImages } = require('../models');
const search = require('./searchExample');

router.get('/', async (req, res) => {
    try {
        const periodData = await Dinosaur.findAll({
            include: [
                {
                    model: TimePeriod,
                    attributes: ['period_name'],
                },
                {
                    model: Continent,
                    attributes: ['continent_name'],
                },
                {
                    model: Family,
                    attributes: ['family_name'],
                },
                {
                    model: Diets,
                    attributes: ['diet_name'],
                },
                {
                    model: IntroductionImages,
                },
                {
                    model: PhysicalityImages,
                },
            ],
        }
        )
        if (periodData) {
            res.status(200).json(periodData);
        } else {
            res.status(404).json({ message: 'No time periods found!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.use('/search', search);

module.exports = router;