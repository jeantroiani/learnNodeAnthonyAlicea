var fs = require('fs');

var text = fs.createReadStream(__dirname + '/lorem_ipsum.txt', {encoding : 'utf8', highWaterMark: 16 * 1024});

text.on('data', function(data){
	console.log(data);
});