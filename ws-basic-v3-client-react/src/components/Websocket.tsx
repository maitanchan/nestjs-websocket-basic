import React, { useContext, useEffect, useState } from 'react'
import { WebsocketContext } from '../context/WebsocketContext'

type MessagePayload = {
    content: string
}

export const Websocket = () => {

    const [value, setValue] = useState('')

    const [messages, setMessages] = useState<MessagePayload[]>([])

    const socket = useContext(WebsocketContext)

    useEffect(() => {

        socket.on('connect', () => {

            console.log('Connected');

        })

        socket.on('onMessage', (newMessage: MessagePayload) => {

            setMessages((prev) => [...prev, newMessage])

            console.log('onMessage event received');
            console.log(newMessage);

        })

        return () => {

            console.log('Unregistering Events...');
            socket.off('connect')
            socket.off('onMessage')

        }

    }, [])

    const onSubmit = () => {

        socket.emit('newMessage', value)

        setValue('')

    }

    return (

        <div>

            <div>
                <h1>Websocket Components</h1>
                <div>
                    {messages.length === 0 ? (<div>No messages </div>) : (<div> {messages.map((msg) => (<div>{msg.content}</div>))}</div>)}
                </div>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div >

    )

}
