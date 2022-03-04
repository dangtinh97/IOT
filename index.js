const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    // ...
});

io.on("connection", (socket) => {
    // ...
    console.log(socket)
});
const port = parseInt(process.env.PORT || 3003 )
httpServer.listen(port);
httpServer.on("connection",function (){
    console.log(`listen port ${port}`)
})