require('dotenv').config({ path: './.server.conf.info' });

const { PORT, MONGODB_URI } = process.env;

module.exports = {
    PORT,
    MONGODB_URI,
};