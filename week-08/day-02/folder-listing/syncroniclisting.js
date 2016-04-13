var fs = require('fs');

var fileList = fs.readdirSync('./');

console.log(fileList);
