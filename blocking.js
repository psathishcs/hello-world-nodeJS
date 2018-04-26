var fs = require('fs');
var contents = fs.readFileSync('hello.js', 'utf-8');
console.log('\n\n-------\n' + contents + '-------\n')
console.log('Doing something else');