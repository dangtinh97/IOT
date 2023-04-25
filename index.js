require('dotenv').config()
const app = require("express")();
const httpServer = require("http").createServer(app);
const port = process.env.PORT || 3003;
const io = require("socket.io")(httpServer);

io.attach(httpServer,{
    cookie:false,
    pingInterval:10000,
    pingTimeout:5000
})

io.on('connection',(socket)=>{
    console.log(socket.id)
    // socket.emit('PONG',{})
})

httpServer.listen(port,function (){
    console.log('server start with*:'+port)
})
