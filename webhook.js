var token = process.env.TOKEN || 'token';
var received_updates = [];
function webhook(req,res)
{
    if (req.query['hub.mode'] == 'subscribe' && req.query['hub.verify_token'] == token) {
        res.send(req.query['hub.challenge']);
    } else {
        res.sendStatus(400);
    }
}
function index(req  ,res){
    console.log(req);
    res.send('<pre>' + JSON.stringify(received_updates, null, 2) + '</pre>');
}
module.exports = {webhook,index}