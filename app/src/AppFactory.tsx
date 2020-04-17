import React, { createContext } from 'react'
import CounterPresenter from './adapters/presenters/CounterPresenter'
import App from './ui/App'
import { CounterRestGateway, UseCaseFactory } from './adapters'

interface ContextProps {
  counterPresenter: any
}

export const AppContext = createContext({} as ContextProps)

const counterRestGateway = new CounterRestGateway('http://localhost:3001')
const useCaseFactory = new UseCaseFactory(counterRestGateway)
const counterUseCaseIn = useCaseFactory.getCounterUseCaseIn()

export const AppFactory = (): JSX.Element => {
  const counterPresenter = CounterPresenter(counterUseCaseIn)
  return (
    <AppContext.Provider value={{ counterPresenter }}>
      <App />
    </AppContext.Provider>
  )
}
