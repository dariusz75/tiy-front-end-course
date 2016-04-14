var fs = require('fs');

fs.rmdir('test-folder', function (error) {
 if (!error) {
 	console.log('File removed');
 } else{
 	console.log(error);
 }
})