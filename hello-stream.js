var fs = require('fs');
var data = '';
var data1= "this Write Stream test"
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');

readStream.setEncoding('UTF8');

readStream.on('data', function(chuck){
    data += chuck;
})

readStream.on('end', function(){
    console.log(data);
})

readStream.on('error', function(err){
    console.log(err.stack);
})

console.log('End   !');
writeStream.write(data1, 'UTF8')
writeStream.end();

writeStream.on('finish', function(){
    console.log('Write Completed!');
})

writeStream.on('error', function(err){
    console.log(err.stack)
})

console.log('End Again !');