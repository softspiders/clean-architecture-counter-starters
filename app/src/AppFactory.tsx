import React, { createContext } from 'react'
import { UseCaseFactory } from './adapters'
import App from './ui/App'
import CounterUseCaseInReactPresenter from './adapters/presenters/CounterUseCaseInReactPresenter'

export const AppContext = createContext({} as ContextProps)

interface ContextProps {
  counterPresenter: any
}

const useCaseFactory = new UseCaseFactory('http://localhost:3001')
const counterUseCaseIn = useCaseFactory.getCounterUseCase()
console.log('AppFactory.tsx')

export const AppFactory = (): JSX.Element => {
  const counterReactPresenter = CounterUseCaseInReactPresenter(counterUseCaseIn)
  return (
    <AppContext.Provider value={{ counterPresenter: counterReactPresenter }}>
      <App />
    </AppContext.Provider>
  )
}

export default AppFactory
