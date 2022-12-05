var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Server is connected.');
}).listen(8000);
console.log("Server started... Running on localhost:8000"); 