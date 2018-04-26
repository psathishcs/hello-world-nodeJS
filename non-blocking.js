var fs = require('fs');

var contents = fs.readFile('hello.js', 'utf-8', function(err, contents){
    console.log('-------\n' + contents + '-------\n')
});

console.log('Doing something else');