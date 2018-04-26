var http = require('http');
http.createServer(function(request, responce){
    responce.writeHead(200, {'Content-Type': 'text/plain'});
    responce.end('Hello, World nodeJS');
}).listen(8081);
console.log("Server is running on port 8080!!!")
