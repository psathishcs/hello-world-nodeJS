const cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
app.set('view engine', 'ejs');
app.use(cookieParser());

const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose')

const PORT = 3005
mongoose.connect('mongodb://localhost:27017/mydb')

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    nationally :String
})
const User = mongoose.model('User', userSchema)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/mongodb/user',(req, res) => {
    console.log("Setting the cookies!")
    res.cookie('name', 'express.js') // Setting the cookie
    res.cookie('author', 'Parthasarathy', {expire: 60000 + Date.now()})
    res.cookie('age', 'Parthasarathy', {maxAge: 60000 })
    User.find((err, responce) => {
        if (err)
            res.end(err)
        else 
            res.json(responce)
    })
})


app.get('*', (req, res) => {
    res.send('Sorry, Invalide URL !')
})


app.listen(PORT,() => {
    console.log(`Node.js app listening on port ${PORT}` )
    console.log(`Process : ${path.basename(__filename)}`)
})
