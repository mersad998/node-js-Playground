var fs = require('fs');


var readable = fs.createReadStream(__dirname + '/exampleFile.txt', {
    encoding: 'utf-8',
    highWaterMark: 16 * 1024 //the highWaterMark is size of buffer for each chunk in bit
}); 

var writable = fs.createWriteStream(__dirname + '/exampleFileCopy.txt');
