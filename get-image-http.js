const http = require('http');
const fs = require('fs');

http.createServer(function(request, responce){
    var reqObj = require('url').parse(request.url, true)
    var name = require('url').parse(request.url, true).query.name;
    console.log('Requst %j \n', request);
    console.log('Requst %j \n', reqObj);
    console.log(reqObj.query);
    console.log(name);
    if (name === undefined) name = 'world';

    if (name == 'burningbird') {
        var file = 'phoenix5a.png';
        fs.stat(file, function(error, status){
            if (error) {
                console.error(error);
                responce.writeHead(200, {'Content-type': 'text/plain'});
                responce.err("Sorry, Burningbird isn't around rught now \n");
            }else {
                var img = fs.readFileSync(file);
                responce.contentType = 'image/png';
                responce.contentLength= status.size;
                responce.end(img, 'binary')
            }
        });
    }else {
        responce.writeHead(200, {'Content-type': 'text/plain'});
        responce.end('Hello, ' +  name + '\n')
    }
}).listen(8124)