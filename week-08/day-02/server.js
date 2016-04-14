var http = require('http');

http.createServer(function (request, response) {
	 response.writeHead(200);
	 response.end('Response sent!') 
}).listen(3000);

console.log('Server started...');