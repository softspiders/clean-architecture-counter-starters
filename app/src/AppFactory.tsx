import React, { createContext } from 'react'
import usePresenter from './adapters/presenters/CounterPresenter'
import App from './ui/App'
import { UseCaseFactory } from './adapters'

interface ContextProps {
  counterPresenter: any
}

export const AppContext = createContext({} as ContextProps)

const useCaseFactory = new UseCaseFactory()

export const AppFactory = (): JSX.Element => {
  const counterPresenter = usePresenter(useCaseFactory.getCounterUseCaseIn())
  return (
    <AppContext.Provider value={{ counterPresenter }}>
      <App />
    </AppContext.Provider>
  )
}
