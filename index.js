require('dotenv').config()
const port = process.env.PORT || 3000
var WebSocket = require('ws');
var app = require('express')()
var server = require('http').createServer(app);
const url = require('url');

const TYPE_ESP8266 = "esp8266";
const TYPE_CONTROL = "control";

var ws = new WebSocket.Server({
    server
});
let clients = [];
ws.on('connection', function(socket, req) {
    let urlObject = url.parse(req.url, true);
    const isEsp8266 = urlObject.pathname.indexOf('esp8266')!==-1;
    const isControl = urlObject.pathname.indexOf('control')!==-1;
    const code = urlObject.query.code;
    clients.push({
        socket:socket,
        code: code,
        isEsp8266:isEsp8266,
        isControl:isControl
    })

    socket.on('message', function(message) {
        let mess = message.toString();
        console.log('received: %s', mess);
        if(mess==="CONTROL_CONNECTED"){
            let find = findSocket(code,TYPE_ESP8266);
            if(find!=null){
                find.send("CONTROL_CONNECTED")
            }
        }

        if(mess==="ESP8266_CONNECTED"){
            let find = findSocket(code,TYPE_CONTROL);
            if(find!==null){
                find.send("ESP8266_CONNECTED")
            }
        }

        if(mess.indexOf("DEVICE")!==-1){
            let find = findSocket(code,TYPE_CONTROL);
            if(find!==null){
                find.send(mess)
            }
        }
        if(mess.indexOf("EVENT_OUT-")!==-1){
            let find = findSocket(code,TYPE_ESP8266);
            if(find!==null){
                find.send(mess)
            }
        }
    });
    socket.on('close', function(err) {
        var index = clients.indexOf(socket);
        clients.splice(index, 1);
        console.log('disconnected',err);
    });
    ws.on('error', (e)=>{
        console.log(e)
    });
});

function findSocket(code,type='control')
{
    const isControl = type===TYPE_CONTROL;
    const isEsp8266 = type===TYPE_ESP8266;
    let filter = clients.filter(item => {
        return item.isEsp8266 === isEsp8266 && item.isControl === isControl && item.code === code;
    })
    if (filter.length === 0) {
        return null;
    }
    return filter[filter.length-1].socket;
}

function time(){
    let now = new Date()
    return `${now.getFullYear()}/${now.getMonth()+1}/${now.getDay()}|${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}
server.listen(port);
console.log('Server listening on port:'+port);
