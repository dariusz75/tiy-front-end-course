var express = require('express');
var myApp = express();
myApp.set('view engine', 'jade');
myApp.use('/assets', express.static('public'));

myApp.get('/', function(request, response){
	response.render('index', {header: 'Welcome to Express-Jade'});
});
myApp.listen(3000);

console.log('Server started...');
