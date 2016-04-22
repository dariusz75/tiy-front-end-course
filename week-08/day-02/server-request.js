var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	if (request.url === '/') {
	 	response.writeHead(200, {'content-type': 'text/html'});
	 	var html = fs.readFileSync('./index-request.html');
	 	response.end(html);
	 } else if (request.url === '/document') {
	 	response.writeHead(200, {'content-type': 'text/html'});
	 	var html = fs.readFileSync('./document.html');
	 	response.end(html);
	 } else {
	 	response.writeHead(404);
	 	response.end('The website has not been found');
	 }
}).listen(3000);

console.log('Server started...');