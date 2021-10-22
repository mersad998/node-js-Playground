var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// this will automatically set the content type to text/html
app.get('/', function (req, res) {
    res.send(
        '<html><head></head><body><h1>hello world!</h1></body></html>'
    )
});

// res.json will automatically convert the js object/array to json with content type application/json
app.get('/api', function (req, res) {
    res.json({ firstName: 'my first name', lastName: 'my last name' })
});

// routing with parameters
app.get('/person/:id', function (req, res) {
    res.json({ personId: req.params.id });
});

app.listen(port);
