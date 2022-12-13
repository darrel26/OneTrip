const unknownEndpoint = (req, res, next) => {
    const err = new Error('Unknown Endpoint');
    err.status = 404;
    next(err);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    console.error(`Error Message   : ${err.message}`);
    console.error(`Error Status    : ${err.status}`);
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
};

module.exports = {
    unknownEndpoint, errorHandler,
};