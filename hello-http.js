const http = require('http')
const port = 3000

const requestHandler = function(request, response){
    console.log(request.url)
    response.end(`Hello, Node.js server!`)
}
const server = http.createServer(requestHandler)

server.listen(port, function(err){
    if (err) {
        return console.log(`Request cannot be handled right, Try again later!`, err)
    }
    console.log(`Server is listening on ${port}`);
})

