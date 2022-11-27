const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/user.model');

const app = express();
const { MONGODB_URI } = require('./utils/config');

mongoose
    .connect(MONGODB_URI)
    .then(console.log('connected to MongoDB'))
    .catch((error) => console.log(error));

module.exports = app;