import "../styles/styles.scss"
import React, { useEffect } from "react";
// import { DataQueue } from "../classes/DataQueue";
const io = require("socket.io-client");
const socket = io("http://localhost:2999", {
  transports: ['websocket']
});
// const DataContext = require("../context/DataContext");
// const DataQueue = require('../classes/DataQueue');

export const DataContext = React.createContext();

function MyApp({Component, pageProps}) {
  const maxDataQueueSize = 100;
  // const dataQueue = new DataQueue(maxDataQueueSize);
  const dataQueue = [];

  useEffect(() => {
        console.log("Got here")
        socket.on('incoming message', (message) => {
          console.log(message);
           
          if( dataQueue.length > maxDataQueueSize ) {
            dataQueue.shift();
          }

          dataQueue.push(message);
        })
    }, [socket])
    
    return(
      <DataContext.Provider value={dataQueue}>
        <Component {...pageProps} />
      </DataContext.Provider>
    );
}

export default MyApp