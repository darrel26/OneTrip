const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { requestLog } = require('./utils/middleware');
const { unknownEndpoint, errorHandler } = require('./utils/errorHandler');
const userRouter = require('./routers/user.router');
const tripRouter = require('./routers/trip.router');

const app = express();
const { MONGODB_URI } = require('./utils/config');

mongoose
    .connect(MONGODB_URI)
    .then(console.log('connected to MongoDB'))
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(requestLog);

app.use('/api/users', userRouter);
app.use('/api/trip', tripRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;