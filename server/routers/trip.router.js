// eslint-disable-next-line new-cap
const router = require('express').Router();
const Trip = require('../models/trip.model');
const config = require('../utils/config');
const { authenticateToken } = require('../utils/middleware');

router.get('/', authenticateToken, async (req, res) => {
    const trips = await Trip.find({});
    res.json(trips);
});

router.get('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const trip = await Trip.findById(id);

    if (trip) {
        res.status(200).json(trip);
    } else {
        res.status(404).end();
    }
});

router.post('/add-trip', authenticateToken, async (req, res, next) => {
    const {
        title, basedLocation, tripDate, places, budget, expenses,
    } = req.body;
    const user = await req.user;

    const trip = new Trip({
        title,
        basedLocation,
        tripDate,
        places,
        budget,
        expenses,
        user: user._id,
    });

    try {
        const savedTrip = await trip.save();
        user.trips = user.trips.concat(savedTrip._id);
        await user.save();
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