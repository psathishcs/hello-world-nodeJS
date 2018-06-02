const http = require('http')
const url = require('url')
const querystring = require('querystring')
const port = 3001
var body = ''

const requestHandler = (request, responce) => {
    if (request.method  === 'GET'){
        responce.writeHead(200, {'Context-type': 'text/plan', 'Auth': 'GET'})
        responce.write('Hello, Node.js Server!')
        responce.end()

        pathname = url.parse(request.url).pathname
        query = url.parse(request.url,true).query
        console.log(`Path Name : ${pathname}`)
        console.log(`id: ${query.id}`)
        console.log(`option: ${query.option}`)

    }else if (request.method === 'POST') {
        
        request.on("data", (chunk) => {
            body += ' '+ chunk
        })
        request.on('end',() => {
            responce.writeHead(200, {'Context-type': 'text/plan', 'Auth': 'POST'})
            responce.end(body)
        })
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log(`Request cannot be handled right, Try again later!`, err)
    }
    console.log(`Server is listening on ${port}`);
})
