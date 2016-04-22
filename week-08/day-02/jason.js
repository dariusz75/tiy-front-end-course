var http = require('http');

http.createServer(function(request, responce){

	var data = {
		id: 456,
		name: 'Dariusz',
		title: 'FE Dev'
	};
	responce.writeHead(200, {'content-type': 'application/json'});
	responce.end(JSON.stringify(data));

}).listen(3000);

console.log('Server started...');