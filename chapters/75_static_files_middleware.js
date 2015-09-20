var express = require('express');
var app = express();

//Setting an global variable
var port = process.env.PORT || 3000;

app.use('/assets', express.static('public'));

//Creating your own middlewre 
 app.use('/', function(req, res, next){
	 console.log(req.url);
	 next();
 })

app.get('/', function (req, res) {
	res.send('<html><head><link href="/assets/styles.css" rel="stylesheet" type="text/css" ></head><body><h1>Hello Worlds</h1></body></html>')
});



app.get('/person/:id', function (req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + ' </h1></body></html>')
});

app.get('/api', function (req, res) {
	res.json({name:'Jean', lastName: 'Troiani'});
});

app.listen(port);

