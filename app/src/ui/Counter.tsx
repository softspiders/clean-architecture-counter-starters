import React from 'react'

export interface CounterProps {
  counter: number
  onClick: () => void
}

const Counter = ({ counter, onClick }: CounterProps): JSX.Element => (
  <div>
    <div data-testid="value-testid">{counter}</div>
    <button data-testid="button-testid" onClick={onClick}>
      Click
    </button>
  </div>
)

export default Counter
