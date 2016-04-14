var fs = require('fs');

fs.mkdir('test-folder', function (error) {
 if (!error) {
 	console.log('Folder created.');
 } else{
 	console.log(error);
 }
})