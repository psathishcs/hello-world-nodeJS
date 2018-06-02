const express = require('express')
const app = express()
const redis = require('redis')
app.set('view engine', 'ejs');
const redisClient = redis.createClient(6379, '192.168.253.128')
redisClient.on('connect', () => {
    console.log('Redis client connected.')
})

redisClient.on('error', (err) => {
    console.log(`Redis client Not able to connect to Redis server : ${err}.`)
})

const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose')

const PORT = 3007
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

app.get('/api/redis/user',(req, res) => {
    var user_id = req.query.id
    console.log(req.query.id)
    redisClient.get(`/user?id=${user_id}`,(err, data) => {
        if (err || data === null){
            console.log('Reading the MongoDB!')
            User.find({id: user_id}, (err, responce) => {
                if (err)
                    res.end(err)
                else {
                    console.log(responce)
                    redisClient.set(`/user?id=${user_id}`, JSON.stringify(responce))
                    res.json(responce)
                }
            })
        } else {
            console.log('Getting data from Redis Catch!')
            res.send(JSON.parse(data))
        }
    })
})


app.get('*', (req, res) => {
    res.send('Sorry, Invalide URL !')
})


app.listen(PORT,() => {
    console.log(`Node.js app listening on port ${PORT}` )
    console.log(`Process : ${path.basename(__filename)}`)
})
