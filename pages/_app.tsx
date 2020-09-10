import {AppProps} from 'next/app';

import { ThemeProvider,CSSReset } from '@chakra-ui/core';
// import { Component } from 'react';

const App = ({Component,pageProps}:AppProps) => {
    return (
        <ThemeProvider>
            <CSSReset/>

           <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App;