const http = require('http');
const app = require('./app');
const { PORT } = require('./utils/config');

const server = http.createServer(app);

server.listen(process.env.npm_config_env === 'production' ? 443 : PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Server running in ${process.env.npm_config_env} mode`);
});