const express = require('express');
const app = express()

app.get('/hello', (req, res)=> {
    res.send(`GET://hello Hello, Express.js`)
})

app.get('/hello/:id',(req, res) => {
    res.send(`Hello, Express.js with the id -> ${req.params.id}`)
})

app.get('/things/:id([0-9]{5})/:name',(req, res) => {
    res.send(`id -> ${req.params.id}, name -> ${req.params.name}`)
})

app.get('*', (req, res) => {
    res.send('Sorry, Invalide URL !')
})

app.post('/hello', (req, res) => {
    res.send(`POST://hello Hello, Express.js`)
})

app.listen(3001,() => console.log('Express.js app listening on port 3001 '))