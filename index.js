const app = require('express')();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    allowEIO3: true,
    cors: {
        origin: '*',
        credentials: true
    }
});

io.on("connection", (socket) => {
    // ...
    console.log("connect----"+socket.id)
    socket.emit('ping',JSON.stringify({
        status:200
    }))
    setTimeout(function (){
        socket.emit("ping_2")
        socket.emit("ping_3",{
            status:200
        })
    },2000)

});
const port = parseInt(process.env.PORT || 3003 )
httpServer.listen(port);
httpServer.on("connection",function (){
    console.log(`listen port ${port}`)
})