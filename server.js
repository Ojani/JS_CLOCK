const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    req.url = routes[req.url] || req.url;

    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end("<h1 style='font-family: arial; text-align: center'>Page Not Found</h1>");
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
});


const routes = {
    "/": "/index.html"
}


server.listen(5000);