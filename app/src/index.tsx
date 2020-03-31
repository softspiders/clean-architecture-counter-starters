import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import CounterUseCaseInReactPresenter from './adapters/presenters/CounterUseCaseInReactPresenter'
import App from './ui/App'
import { UseCaseFactory } from './adapters'

interface ContextProps {
  counterPresenter: any
}

export const AppContext = createContext({} as ContextProps)

const useCaseFactory = new UseCaseFactory('http://localhost:3001')
const counterUseCaseIn = useCaseFactory.getCounterUseCaseIn()

export const AppFactory = (): JSX.Element => {
  const counterReactPresenter = CounterUseCaseInReactPresenter(counterUseCaseIn)
  return (
    <AppContext.Provider value={{ counterPresenter: counterReactPresenter }}>
      <App />
    </AppContext.Provider>
  )
}

ReactDOM.render(<AppFactory />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
