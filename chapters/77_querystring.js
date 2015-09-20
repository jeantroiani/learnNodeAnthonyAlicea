var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000;

//creates application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/person', urlencodedParser, function (req, res) {
	res.send('thank you');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

//same but with JSON
app.post('/personjson', jsonparser, function (req, res) {
	res.send('thanks you for the JSON file');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});


app.use('/assets', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/person/:id', function (req, res) {
	res.render('person', {ID : req.params.id, Qstr: req.query.qstr });
});

app.get('/api', function (req, res) {
	res.json({name:'Jean', lastName: 'Troiani'});
});

app.listen(port);

