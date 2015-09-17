var fs = require('fs');

var text = fs.readFileSync(__dirname + '/testText.txt', 'utf8');

console.log(text);

var textAsync = fs.readFile(__dirname + '/testText.txt', 'utf8',
	function (err, data) {
		console.log(data);
	}
);

console.log('done');
