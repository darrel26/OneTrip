const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user.router');

const app = express();
const { MONGODB_URI } = require('./utils/config');

mongoose
    .connect(MONGODB_URI)
    .then(console.log('connected to MongoDB'))
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);

module.exports = app;