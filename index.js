require('dotenv').config()
const app = require("express")();
const httpServer = require("http").createServer(app);
const port = process.env.PORT || 3003;
const io = require("socket.io")(httpServer,{
    cors:{
        origin:'*'
    },
    allowEIO3: true,
    transports:['websocket']
});

io.attach(httpServer,{
    allowEIO3:true,
    cookie:false,
    pingInterval:10000,
    pingTimeout:5000,
    transports:['websocket']
})

io.on('connection',(socket)=>{
    console.log(socket.id)
    // socket.emit('PONG',{})
})

httpServer.listen(port,function (){
    console.log('server start with*:'+port)
})

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
