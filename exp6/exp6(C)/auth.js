const http = require("http");
var dbmodule = require("./module");
var server = http.createServer((request, response) => {
	result = dbmodule.authenticateUser(2000, 2);
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.end("<html><body><h1>" + result + "- You have connected to the localhost 2002 </h1></body></html>");
	console.log("Request received");
});
server.listen(2002);
console.log("Server is running at port 2002")