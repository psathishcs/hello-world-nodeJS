const fs = require('fs');
fs.readFile('qu1iz.json',
    function(error, text){
        if (error){
            console.error('Error while reading  quiz file');
        }else {
            try {
                const obj = JSON.parse(text);
                console.log(JSON.stringify(obj, null, 4));
            }catch (e) {
                console.error('Invalide JSON in file');
            }
        }
    }
);
