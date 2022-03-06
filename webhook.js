var token = process.env.TOKEN || 'token';
var received_updates = [];
function webhook(req,res)
{
    console.log(req.query)
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

function facebook(req,res)
{
    console.log('Facebook request body:', JSON.stringify(req.body));

    if (!req.isXHubValid()) {
        console.log('Warning - request header X-Hub-Signature not present or invalid');
        res.sendStatus(401);
        return;
    }

    console.log('request header X-Hub-Signature validated');
    // Process the Facebook updates here
    received_updates.unshift(req.body);
    res.sendStatus(200);
}
module.exports = {webhook,index,facebook}