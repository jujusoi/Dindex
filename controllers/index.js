const router = require('express').Router();
const { TimePeriod, Dinosaur, Continent } = require('../models');

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

module.exports = router;