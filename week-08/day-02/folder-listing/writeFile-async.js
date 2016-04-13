var fs = require('fs');
var content = 'This is my text. I love this text.';

fs.writeFile('mytestfile.txt', content, function (error) {
	
	 console.log('file saved');

});