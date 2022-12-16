/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    basedLocation: {
        type: String,
        required: true,
    },
    tripDate: [
        {
            startDate: String,
            endDate: String,
        },
    ],
    places: [
        {
            type: Object,
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    budget: {
        type: Number,
    },
    expenses: [
        {
            type: String,
            amount: Number,
        },
    ],
});

tripSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

const Trip = new mongoose.model('Trip', tripSchema);

module.exports = Trip;