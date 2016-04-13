var fs = require('fs');

var fileContent = fs.readFileSync('./modules.txt', 'utf-8');

console.log(fileContent);