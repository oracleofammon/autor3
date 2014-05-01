var express = require('express'); 
var fs = require('fs');
var http = require('http');
var https = require('https');

var app = express();
app.set('port', process.env.PORT || 8080);

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString(); 
  response.send(data); 
}); 

app.use(express.static(__dirname)); 

http.createServer(app).listen(app.get('port'), function() {
  console.log('Listening on ' + app.get('port'));
}); 
