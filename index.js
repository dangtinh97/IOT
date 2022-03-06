require('dotenv').config()
var bodyParser = require('body-parser');
var xhub = require('express-x-hub');
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const route = require('./route')
app.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));
app.use(bodyParser.json());
app.use(route)
const port = parseInt(process.env.PORT || 3003)
server.listen(port)