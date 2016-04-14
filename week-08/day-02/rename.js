var fs = require('fs');

fs.rename('to-rename.txt', 'renamed.txt', function (error) {
 if (!error) {
 	console.log('File renamed');
 } else{
 	console.log(error);
 }
})