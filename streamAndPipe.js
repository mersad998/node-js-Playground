var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/exampleFile.txt', {
    encoding: 'utf-8',
    highWaterMark: 16 * 1024 //the highWaterMark is size of buffer for each chunk in bit
}); 

var writable = fs.createWriteStream(__dirname + '/exampleFileCopy.txt');

// readable inherited from event emitter in its source code . so it has properties like on in
// its prototype
readable.on('data', function (chunk) {
    console.log('chunk: ', chunk);
    writable.write(chunk);
})

// we can use pipe instead of listen to readable stream and pass each chunk to writable stream directly:

var readable = fs.createReadStream(__dirname + '/exampleFile.txt', ); 

var writable = fs.createWriteStream(__dirname + '/exampleFileCopy.txt');

readable.pipe(writable); // and this is work same but simpler and faster