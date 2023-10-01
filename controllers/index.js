const router = require('express').Router();
const { TimePeriod } = require('../models');

router.get('/', async (req, res) => {
    try {
        const periodData = await TimePeriod.findAll();
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