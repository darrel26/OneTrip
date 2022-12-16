// eslint-disable-next-line new-cap
const router = require('express').Router();
const Trip = require('../models/trip.model');
const { authenticateToken } = require('../utils/middleware');

router.get('/', authenticateToken, async (req, res) => {
    const trip = await Trip.find({});
    res.json(trip);
});

router.post('/', authenticateToken, async (req, res, next) => {
    const {
        title, basedLocation, places, budget, expenses,
    } = req.body;

    const isTripExisting = await Trip.findOne({ title });

    if (isTripExisting) {
        const duplicateError = new Error(`${title} already exist, please change !`);
        duplicateError.status = 400;
        next(duplicateError);
    }

    const newTrip = new Trip({
        title,
        basedLocation,
        places,
        budget,
        expenses,
    });

    try {
        const savedTrip = await newTrip.save();
        res.status(201).json({
            userData: savedTrip,
            message: 'Trip Added Successfully!',
        });
    } catch (error) {
        error.status = 403;
        next(error);
    }
});

module.exports = router;