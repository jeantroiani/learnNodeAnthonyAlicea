var fs = require('fs');
var zlib = require('zlib');

var reader = fs.createReadStream(__dirname + '/lorem_ipsum.txt')

var writable = fs.createWriteStream(__dirname + '/writeableTest.txt');

var compressed = fs.createWriteStream(__dirname + '/testCompressed.txt.gz');

var gzip = zlib.createGzip();

reader.pipe(writable);

reader.pipe(gzip).pipe(compressed);