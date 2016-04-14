var fs = require('fs');

fs.unlink('file-to-delete.js', function (error) {
 if (!error) {
 	console.log('File deleted');
 } else{
 	console.log(error);
 }
})