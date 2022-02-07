import {Server} from "net";
import express, {Express} from "express";
import bodyParser from "body-parser";
import compression from "compression";
import appConfig from './config/app'
import helmet from "helmet";
import * as http from "http";
import SocketController from "./app/Http/Controllers/socket.controller";
class App{
    public server:Server
    public readonly app:Express
    constructor() {
        this.app = express()
        this.configPort()
        this.configureMiddleware()
        this.createServer()
        this.createSocket()
    }

    private configPort(){
        this.app.set('port',appConfig.port)
    }

    private createSocket()
    {
        new SocketController(this.server)
    }

    private configureMiddleware(){
        this.app.use(bodyParser.json())
        this.app.use(helmet())
        this.app.use(compression())
    }

    private createServer ()
    {
        this.server = http.createServer(this.app)
    }
}

export default App