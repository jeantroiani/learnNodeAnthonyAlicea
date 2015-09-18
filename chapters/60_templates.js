var http = require('http'),
	fs = require('fs');

http.createServer(function(req, res){
	res.writeHead( 200, { 'Content-Type': 'text/html'});
	var index = fs.readFileSync(__dirname + '/index.htm', 'utf8');
	var message = 'This is a nice'; 
	index = index.replace('{my-template}', message)
	res.end(index);
}).listen(1337, '127.0.0.1'); 