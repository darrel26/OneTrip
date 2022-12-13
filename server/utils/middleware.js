/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const requestLog = (req, res, next) => {
    console.log(`Request Time   : ${new Date().toLocaleString()}`);
    console.log(`Method         : ${req.method}`);
    console.log(`Path           : ${req.path}`);
    console.log(`Body           : ${JSON.stringify(req.body)}`);
    console.log(`Status Code    : ${res.statusCode}`);
    console.log('------------------------------------');
    next();
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        const emptyTokenError = new Error('There are no token provided!');
        emptyTokenError.status = 401;
        next(emptyTokenError);
        return;
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            // eslint-disable-next-line no-param-reassign
            err.status = 403;
            next(err);
            console.error(err);
            return;
        }

        req.user = User.findById(user.id);
        next();
    });
};

module.exports = {
    requestLog, authenticateToken,
};