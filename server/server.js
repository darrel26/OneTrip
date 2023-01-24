const http = require('http');
const app = require('./app');
const { PORT } = require('./utils/config');

const server = http.createServer(app);

server.listen(PORT, process.env.npm_config_env === 'production' ? '0.0.0.0' : 'localhost', () => {
    console.log(`Server running on ${process.env.npm_config_env === 'production' ? 'http://0.0.0.0:5000' : 'http://localhost:5000'}`);
    console.log(`Server running in ${process.env.npm_config_env} mode`);
});