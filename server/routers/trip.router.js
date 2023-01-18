// eslint-disable-next-line new-cap
const router = require('express').Router();
const Trip = require('../models/trip.model');
const config = require('../utils/config');
const { authenticateToken } = require('../utils/middleware');

router.get('/', authenticateToken, async (req, res) => {
    const trips = await Trip.find({});
    res.json(trips);
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

    const savedTrip = await trip.save();
    user.trips = user.trips.concat(savedTrip._id);
    await user.save();

    res.status(201).json(savedTrip);
});

module.exports = router;