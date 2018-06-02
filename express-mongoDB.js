const express = require('express');
const app = express()
app.set('view engine', 'ejs');

const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose')

const PORT = 3004
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
    var user_id = req.query.id
    console.log(req.query.id)
    if (user_id) {
        console.log(`Find by id ${user_id}`)
        User.find({id: user_id}, (err, responce) => {
            if (err)
                res.end(err)
            else 
                res.json(responce)
        })
    }else {
        console.log('Find all !')
        User.find((err, responce) => {
            if (err)
                res.end(err)
            else 
                res.json(responce)
        })
    }

})

app.post('/api/mongodb/user',(req, res) => {
    console.log("POST:///api/mongodb/user")
    var userInfo = req.body
    console.log(`${userInfo.id}, ${userInfo.name}`)
    if (!userInfo.id || !userInfo.name || !userInfo.age || !userInfo.nationally) {
        res.json("{message: 'Please provide correct info such as id, name , age and nationally', type: 'error'}")
    } else {
        var newUser = new User({
            name: userInfo.name,
            id: userInfo.id,
            age: userInfo.age,
            nationally : userInfo.nationally
        })
        console.log(`created newPerson!`)
        newUser.save((err, User) => {
            if (err) {
                console.log("Error!!!!")
                res.render('show_message', {message: 'Database Error, Please try again later !', type: 'error'})
            } else {
                console.log('saved!!!')
                res.json("{message: 'New user added', type: 'success', user: userInfo}");
            }
                
        })
    }
})

app.put('/api/mongodb/user',(req, res) => {
    console.log("PUT:///api/mongodb/user")
    var body = req.body
    if (body.id) {

        User.update({id: body.id}, body, (err, responce) => {
            if (err)
                res.end(err)
            else 
                res.json(responce)
        })
    }
})

app.delete('/api/mongodb/user',(req, res) => {
    console.log("DELETE:///api/mongodb/user")
    var body = req.body
    if (body.id) {
        User.remove({id: body.id},(err, responce) => {
            if (err)
                res.end(err)
            else 
                res.json(responce)
        })
    }
})

app.get('*', (req, res) => {
    res.send('Sorry, Invalide URL !')
})


app.listen(PORT,() => {
    console.log(`Node.js app listening on port ${PORT}` )
    console.log(`Process : ${path.basename(__filename)}`)
})
