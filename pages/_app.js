import "../styles/styles.scss"
import { useEffect } from "react";
const io = require("socket.io-client");
const socket = io("http://localhost:2999", {
  transports: ['websocket']
});

function MyApp({Component, pageProps}) {
    useEffect(() => {
        console.log("Got here")
        socket.on('incoming message', (message) => {
           console.log(message); 
        })
    }, [socket])
    
    return<Component {...pageProps} />
}

export default MyApp