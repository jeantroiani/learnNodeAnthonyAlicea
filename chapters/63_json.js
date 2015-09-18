var http = require('http'),
	fs = require('fs');

http.createServer(function(req, res){
	res.writeHead( 200, { 'Content-Type': 'text/json'});
	
	var obj = {
		firstName: 'Jean',
		lastName: 'Troiani'
	};
	res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1'); 


