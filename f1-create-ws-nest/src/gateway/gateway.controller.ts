import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { GatewayService } from "./gateway.service";
import { Server } from 'socket.io'
import { OnModuleInit } from "@nestjs/common";

@WebSocketGateway({ cors: { origin: 'http://localhost:3000' } })
export class GateWayController implements OnModuleInit {

    constructor(private readonly gatewayService: GatewayService) { }

    @WebSocketServer()
    server: Server

    onModuleInit() {

        this.server.on('connection', (socket) => {

            console.log(socket.id)

            console.log('Connected')

        })

    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {

        this.server.emit('onMessage', { content: body })

        console.log(body);

    }

}