var http = require('http');
var fs = require('fs');

// this is for return text
// http.createServer(function(req, res) {
    
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('hello world!');
    
// }).listen(8080, 127.0,0,1);


// this is for return html
http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myHtmlFile = fs.readFileSync(__dirname + '/index.html');
    res.end(myHtmlFile);
    
}).listen(8080, 127.0,0,1);
