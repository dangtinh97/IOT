import {Server, Socket} from "socket.io";
import {v4 as uuidv4} from 'uuid';

class SocketController {
    public io:Server
    constructor(server:any) {
        this.io = new Server(server,{
            cors:{
                origin:"*",
                credentials: true
            }
        })
        this.generateId()
        this.io.on("connection",socket=>this._onConnect(socket))
    }

    private _onConnect(socket:Socket)
    {
        socket.emit("ping",JSON.stringify({"name":"dangtinh"}))
        socket.on("LED_ON",(data)=>{
            console.log(data)
        })

        socket.on("LED_OFF",(data)=>{
            console.log(data)
        })

        socket.on("BTN_1_SWITCH",(data)=>{
            this.io.emit("BTN_1_SWITCH",JSON.stringify(data))
        })
    }

    private generateId(){
        this.io.engine.generateId = ()=>{
            return uuidv4()
        }
    }
}
export default SocketController