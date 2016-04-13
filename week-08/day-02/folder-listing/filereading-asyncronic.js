var fs = require('fs');

fs.readFile('./modules.txt', 'utf-8', function(error, fileList){
	console.log(fileList);
	console.log(error);
});