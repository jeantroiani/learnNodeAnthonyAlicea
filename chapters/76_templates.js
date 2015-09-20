var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.use('/assets', express.static('public'));

//express by default will look in a folder call VIEW for the view files
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/person/:id', function (req, res) {
	res.render('person', {ID : req.params.id});
});

app.listen(port);

