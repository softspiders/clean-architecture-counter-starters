import React, { useContext } from 'react'
import Counter from './Counter'
import { AppContext } from '../index'

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <Counter />
//         </header>
//       </div>
//     </Provider>
//   );
// };

// const App = () => {
//   const { counterPresenter } = useContext(AppContext)
//   const { state, functions } = counterPresenter
//
//   return (
//     <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
//   )
// }

// const App = (): JSX.Element => {
//   const { counterPresenter } = useContext(AppContext)
//   const { state, functions } = counterPresenter
//
//   return (
//     <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
//   )
// }

function App() {
  return (
    <div className="App">
      <h1>Testing Updated</h1>
    </div>
  )
}

export default App
