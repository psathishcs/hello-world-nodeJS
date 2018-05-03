const fs = require('fs');

var readFilePromisified = function (filename){
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, {encoding: 'utf8'}, 
            (error, data) => {
                if (error) {
                    reject(error);
                }else {
                    resolve(data);
                }
            });
    });
};

module.exports = readFilePromisified;