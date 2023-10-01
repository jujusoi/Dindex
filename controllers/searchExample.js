const search = require('express').Router();
const { Dinosaur } = require('../models');

search.get('/', async (req, res) => {
        try {
            const dinoInfo = await Dinosaur.findAll({
                where: {
                class: req.query.class,
            }
        });
        if (dinoInfo) {
            res.status(200).json(dinoInfo);
        } else {
            res.status(404).json('No dinosaurs found!');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = search;