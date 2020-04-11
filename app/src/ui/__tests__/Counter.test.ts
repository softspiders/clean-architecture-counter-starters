import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter, { CounterProps } from '../Counter'

describe('Counter()', () => {
  it('should display "Click" on the button', () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const { getByTestId } = render(Counter(<CounterProps>{}))

    const buttonTextNode = getByTestId('button-testid')
    expect(buttonTextNode).toHaveTextContent('Click')
  })
})

