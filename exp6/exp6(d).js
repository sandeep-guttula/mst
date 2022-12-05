const http = require("http");
var server = http.createServer((req, res) => {
	res.write("I have created the server!");
	res.end();
});
server.listen(8080);
console.log("Server started... Running on localhost:8080");