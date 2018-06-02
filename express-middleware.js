const express = require('express');
const app = express()

app.use((req, res, next) => {
    console.log('Start....')
    next()
})
app.param('name', (req, res, next, name) => {
    var modified = name + "-dude"
    req.name = modified
    next()
})

app.get('/things/:id([0-9]{5})/:name',(req, res, next) => {
    res.send(`id -> ${req.params.id}, name -> ${req.params.name}, what is up ${req.name}`)
    next()
})

app.use('/things/:id([0-9]{5})/:name',(req, res) => {
    console.log('End')
})

app.get('*', (req, res) => {
    res.send('Sorry, Invalide URL !')
})


app.listen(3002,() => console.log('Express.js app listening on port 3002 '))