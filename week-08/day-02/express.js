var express = require('express');
var myApp = express();

myApp.get('/', function(request, response){
	response.send('Welcome to Express.js');
});
myApp.listen(3000);

console.log('Server started...');
