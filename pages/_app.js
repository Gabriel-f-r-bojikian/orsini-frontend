import "../styles/styles.scss"
import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

function MyApp({Component, pageProps}) {    
    return(
      <DataContext.Provider value={dataQueue}>
        <Component {...pageProps} />
      </DataContext.Provider>
    );
}

export default MyApp;