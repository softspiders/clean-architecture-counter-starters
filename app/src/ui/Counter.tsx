import React from 'react'

interface CounterProps {
  counter: number
  onClick: () => void
}

const Counter = ({ counter, onClick }: CounterProps): JSX.Element => (
  <div>
    <div>{counter}</div>
    <button onClick={onClick}>Click</button>
  </div>
)

export default Counter
