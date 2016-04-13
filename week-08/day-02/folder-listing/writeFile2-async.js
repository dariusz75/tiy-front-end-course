var fs = require('fs');
var content = `<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

</body>
</html>`;

fs.writeFile('mytexttag.html', content, function (error) {
	
	 console.log('file saved');

});