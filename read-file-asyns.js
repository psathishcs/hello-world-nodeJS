"use strict";

const readFilePromisified = require('./readFilePromisified.js');

readFilePromisified('quisz.json')
.then(text=> {
    console.log ("quiz json data: ")
    console.log(text);
})
.catch(err => {
    console.log('Error reading quiz file.');
    console.log(err)
});
