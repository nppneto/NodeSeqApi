const app = require('../src/app');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if(isNaN(port)) return val;
    if(port >= 0) return port;
    return false;
}

server.listen(port, () => {
    console.log(`Server listen on http://127.0.0.1:${port}...`);
});
