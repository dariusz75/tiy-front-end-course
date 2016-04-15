var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	 response.writeHead(200, {'content-type': 'text/html'});
	 var html = fs.readFileSync('./index.html');
	 response.end(html);
}).listen(3000);

console.log('Server started...');