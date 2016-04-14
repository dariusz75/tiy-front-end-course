var http = require('http');

http.get('http://100dpi.co.uk', function(res){
	res.on('data', function (data) {
		 console.log(data.toString()); 
	})
});