import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './ui/App'
import { Factory } from './adapters'

const adapterFactory = new Factory('http://localhost:3001')

interface ContextProps {
  factory: Factory
}

export const AppContext = createContext({} as ContextProps)

ReactDOM.render(
  <AppContext.Provider value={{ factory: adapterFactory }}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
