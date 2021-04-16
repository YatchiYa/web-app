
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const config = require('./config');
const db_connection = require('./db/db-connect')
const routes = require('./controllers/index'); 
const path = require("path")
const mongoose = require('mongoose');
const fs = require('fs').promises;
const fetch = require('node-fetch');
const mongo = require('mongodb');
const objectID = require('mongodb').objectID;

var http = require('http');
const socket = require('socket.io');
var httpServer = http.createServer(app);
const io = socket(httpServer);





require('dotenv').config()
app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(passport.initialize());
require('./validation/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connection test to database
db_connection.connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
.then(res => {
    console.log("logged in database now")
})
.catch(err => {
    console.log("error not connected to database nooo")
    console.log(err)
})

app.use('/', routes);

if (process.env.NODE_ENV === "production")
{
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const port = process.env.PORT || 4000;


// socket part for the message !!!!!!   ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
io.on('connection', (socket) => {
    console.log('connected socket')
    io.emit('noOfConnections', Object.keys(io.sockets.connected).length)

    socket.on('disconnect', () => {
        console.log(" disconnected from socket !!!")
        io.emit('noOfConnections', (Object.keys(io.sockets.connected).length))
    })

    socket.on('user-says', (data) => {
        socket.broadcast.emit('user-says', data)
    })
})

httpServer.listen(port, function() {
    console.log("Server is running on Port: " + port);
});