/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'User required an email address'],
        validate: {
            validator(email) {
                const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                return pattern.test(email);
            },
            message: (props) => `${props.value} is not a valid email address`,
        },
    },
    username: {
        type: String,
        required: [true, 'User required an username'],
    },
    password: {
        type: String,
        required: [true, 'User required a password'],
    },
    trips: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trip',
            default: [],
        },
    ],
}, { timestamps: true });

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

const User = new mongoose.model('User', userSchema);

module.exports = User;