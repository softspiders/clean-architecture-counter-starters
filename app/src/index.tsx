import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { CounterUseCaseOutRestGateway } from './adapters/gateways'
import {CounterUseCase, CounterUseCaseIn} from './domain/usecases'
import App from './ui/App'

const restClient = new CounterUseCaseOutRestGateway('http://localhost:3001')
const counterUseCase = new CounterUseCase(restClient)

interface ContextProps {
  counterUseCaseIn: CounterUseCaseIn
}

export const AppContext = createContext({} as ContextProps)

ReactDOM.render(
  <React.Fragment>
    <AppContext.Provider value={{ counterUseCaseIn: counterUseCase }}>
      <App />
    </AppContext.Provider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
