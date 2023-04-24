require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors:{
        origin: '*'
    },
    cookie:false,
});
const port = process.env.PORT || 3003;

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
