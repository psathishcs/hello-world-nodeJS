
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(session({secret: 'Shh, its a secret!'}));

const PORT = 3006;

app.get('/api/session',(req, res) => {
    console.log("Session !")
    if (req.session.page_views){
        req.session.page_views++
        res.send(`Hello, Node.js Session \nWelcome to the session page again, You visited this page ${req.session.page_views} times`)
    }else {
        req.session.page_views = 1
        res.send(`Hello, Node.js Session \nWelcome to Session page.`)
    }
})

app.listen(PORT,() => {
    console.log(`Node.js app listening on port ${PORT}` )
    console.log(`Process : ${path.basename(__filename)}`)
})


JavaScript