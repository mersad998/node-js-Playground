var http = require('http');
var fs = require('fs');

// ----- this is for return text
// http.createServer(function(req, res) {
    
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('hello world!');
    
// }).listen(8080, 127.0,0,1);


// ----- this is for return html
// http.createServer(function(req, res) {
    
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myHtmlFile = fs.readFileSync(__dirname + '/index.html');
//     res.end(myHtmlFile);
    
// }).listen(8080, 127.0,0,1);

// ---- this is for return manipulated html
// http.createServer(function(req, res) {
    
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myHtmlFile = fs.readFileSync(__dirname + '/index.html','utf-8'); // it will cast to string
//     res.end(myHtmlFile.replace('{message}', 'hello world...'));
    
// }).listen(8080, 127.0,0,1);

// ----- this is for return manipulated html with read stream
http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    
}).listen(8080, 127.0,0,1);
