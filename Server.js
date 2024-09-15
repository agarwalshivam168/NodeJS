const http = require('node:http');

const server = http.createServer(function(req, res) {
    if (req.url === '/home') {
        res.end("This is homepage.")
    } else {
        res.end("Welcome to our server!")
    }
});

server.listen(7777);