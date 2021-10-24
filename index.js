var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

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

//------ work with temp;ate engin's:

app.set('view engine', 'ejs');

app.get('/renderWithEjs/:urlParam', function (req, res) {
    // first parameter will look for a file in view folder whit given name + .`view engine` format
    res.render('index', { customParam: req.params.urlParam }); 
});

// read query string . example on : http://localhost:3000/readQueryString?myParameter=1123
app.get('/readQueryString', function (req, res) {
    res.send(
        res.json({ customQuery: req.query.myParameter })
    )
});

// to render the main form available on : http://localhost:3000/postExample
app.get('/postExample', function (req, res) {
    res.render('formWithPostRequest'); 
});

// the second parameter work as a middleware that add `body` to `req` object
app.post('/postExample', urlEncodedParser, function (req, res) {
    res.send('Thank you!');
    console.log(req.body.firstParam);
    console.log(req.body.secondParam);
});


app.listen(port);
