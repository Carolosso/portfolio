const next = require('next');
const http = require('http');

const dev = false; // w produkcji zawsze false
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    http.createServer((req, res) => {
        handle(req, res);
    }).listen();
});
