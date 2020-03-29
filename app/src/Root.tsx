import React, { createContext } from 'react'
import { Factory } from './adapters'
import App from './ui/App'

interface ContextProps {
  factory: Factory
}

export const AppContext = createContext({} as ContextProps)
const adapterFactory = new Factory('http://localhost:3001')

export const Root = (): JSX.Element => (
  <AppContext.Provider value={{ factory: adapterFactory }}>
    <App />
  </AppContext.Provider>
)

export default Root
