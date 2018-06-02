const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const path = require('path');
const PORT = 3003

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/user',(req, res) => {
    var user_id = req.body.id
    var token = req.body.token
    var geo = req.body.geo
    res.send(`User id  -> ${user_id}, Token -> ${token}, Geo location -> ${geo}`)
})


app.get('*', (req, res) => {
    res.send('Sorry, Invalide URL !')
})


app.listen(PORT,() => {
    console.log(`Node.js app listening on port ${PORT}` )
    console.log(`Process : ${path.basename(__filename)}`)
})
