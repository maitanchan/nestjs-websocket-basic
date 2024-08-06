import React from 'react';
import { WebSocketProvider, socket } from './context/WebsocketContext';
import { Websocket } from './components/Websocket';

function App() {

  return (

    <WebSocketProvider value={socket} >

      <Websocket />

    </WebSocketProvider>

  );

}

export default App;
