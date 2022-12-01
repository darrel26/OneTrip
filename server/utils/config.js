require('dotenv').config({ path: './.server.conf.info' });

const { PORT, TOKEN_SECRET } = process.env;
const MONGODB_URI = process.env.npm_config_env === 'dev'
    ? process.env.MONGODB_URI_DEV
    : process.env.MONGODB_URI_PROD;

module.exports = {
    PORT,
    MONGODB_URI,
    TOKEN_SECRET,
};