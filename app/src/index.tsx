import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { CounterOutRestAdapter } from './gateway'
import { CounterInteractor } from './domain/usecase'
import App from './ui/App'

const restClient = new CounterOutRestAdapter('http://localhost:3001')
const counterUseCase = new CounterInteractor(restClient)

interface IContextProps {
  useCase: CounterInteractor
}

export const AppContext = createContext({} as IContextProps)

ReactDOM.render(
  <React.Fragment>
    <AppContext.Provider value={{ useCase: counterUseCase }}>
      <App />
    </AppContext.Provider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
