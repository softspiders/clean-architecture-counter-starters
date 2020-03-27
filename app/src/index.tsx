import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { CounterOutRestGateway } from './adapters/gateways'
import {CounterInteractor, CounterInteractorIn} from './domain/usecase'
import App from './ui/App'

const restClient = new CounterOutRestGateway('http://localhost:3001')
const counterInteractor = new CounterInteractor(restClient)

interface ContextProps {
  counterInteractorIn: CounterInteractorIn
}

export const AppContext = createContext({} as ContextProps)

ReactDOM.render(
  <React.Fragment>
    <AppContext.Provider value={{ counterInteractorIn: counterInteractor }}>
      <App />
    </AppContext.Provider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
