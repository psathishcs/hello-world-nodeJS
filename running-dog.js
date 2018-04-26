var http = require('http');

var runningDog = function(request, response){
    response.writeHead(200);
    response.write("Dog is running,");
    setTimeout(function(){
        response.write("Dog is done.");
        response.end();
    }, 5000);
}
http.createServer(runningDog).listen(8082);

console.log('Server is running on port 8082');