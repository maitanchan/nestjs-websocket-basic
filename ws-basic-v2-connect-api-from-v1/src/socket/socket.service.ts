import { Injectable, OnModuleInit } from "@nestjs/common";
import { io, Socket } from 'socket.io-client'

@Injectable()
export class SocketService implements OnModuleInit {

    public socket: Socket

    constructor() {

        this.socket = io('http://localhost:9001')

    }

    onModuleInit() {

        this.registerConsumerEvent()

    }

    private registerConsumerEvent() {

        this.socket.on('connect', () => {

            console.log('Connected to Gateway');

        })

        this.socket.on('onMessage', (payload: any) => {

            console.log('SocketClientClass');

            console.log(payload);

        })

    }

}