//@ts-nocheck

import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';
import {Provider} from 'react-redux'
import { store } from '../store/store'


function App({Component, pageProps}) {
    return (
        <Provider store={store}>
                <NextNprogress
                    color="red"
                    startPosition="0.3"
                    stopDelayMs="200"
                    height="3"
                />
                <Component {...pageProps} />
        </Provider>
    )
}

export default App
