require('dotenv').config()
const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const port = process.env.PORT || 3003;

app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.end();
});
app.ws('/', function(ws, req) {
    ws.on('message', function(msg) {
        console.log(msg);
    });
    console.log('socket', req.testing);
});

app.listen(port,function (){
    console.log(`listen *: ${port}`)
});

