const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello, World ....'
    )
});

app.get('/hello', function(req, res){
    res.send('Hello, World Express....'
    )
});

app.post('/hello', function(req, res){
    res.send("Called the POST verstion of the hello function!")
});

app.all('/all',function(req, res){
    res.send("HTTP method doesn't have any effect on this route!")
});

app.get('/hello/:name', function(req, res){
    res.send ('Hello, ' + req.params.name );
    console.log(req);
})
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send("id :" + req.params.id);
});
app.get('*', function(req, res){
    res.send('Sorry: this is a invalide URL');
});
app.listen(3000);
console.log('Sever running on 3000')

