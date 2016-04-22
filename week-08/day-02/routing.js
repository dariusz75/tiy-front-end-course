var express = require('express');
var myApp = express();

// Routing
myApp.get('/', function(request, response){
	response.send('Welcome to Express.js');
});
myApp.get('/products', function(request, response){
	response.send('Welcome to Products');
});
myApp.get('/customer/:id', function(request, response){
	response.send('Customers ID is: ' + request.params.id);
});
myApp.listen(3000);

console.log('Server started...');
