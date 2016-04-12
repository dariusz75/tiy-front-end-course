var express = require('express');
var app = express();

app.get('/', function handleRequest(request, response) {
  response.send('Hello World');
});

app.post('/message', function handleRequest(request, response) {
  response.send('Posting...');
});


app.listen(3000);