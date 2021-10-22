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

// implement node js built in middleware for static files
app.use('/assets', express.static(__dirname + '/public'));

// a custom middleware (route is optional)
app.use('/htmlFileWithStaticStyles', function (req, res, next) {
    console.log('request url is', req.url);
    next() // it will trigger next middleware (get / post and ... are some kind of middleware)
})

// there are some other useful free middleware in express website

// an html that uses the static file
app.get('/htmlFileWithStaticStyles', function (req, res) {
    res.send(
        '<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>hello world!</h1></body></html>'
    )
});

app.listen(port);
