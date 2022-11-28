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
    password: {
        type: String,
        required: [true, 'User required a password'],
    },
    trips: [
        {
            type: String,
            default: [],
        },
    ],
}, { timestamps: true });

const User = new mongoose.model('User', userSchema);

module.exports = User;