/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty!'],
    },
    basedLocation: {
        type: Object,
        required: true,
    },
    tripDate: {
        startDate: {
            type: String,
        },
        endDate: {
            type: String,
        },
    },
    places: [],
    budget: {
        type: Number,
    },
    expenses: [
        {
            type: Object,
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
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