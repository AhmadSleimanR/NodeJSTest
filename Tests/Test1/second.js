var http = require('http');
var date = require('./myfirst.js');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Current Time: ' + date.myDateTime());
}).listen(8080);