var fs = require('fs');

fs.readdir('./', function(error, fileList){
	console.log(fileList);
	console.log(error);
});

