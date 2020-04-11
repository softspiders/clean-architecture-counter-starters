import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AppFactory } from '../../AppFactory'

describe('Take a snapshot', () => {
  afterEach(cleanup)
  it('should take a snapshot', () => {
    const { asFragment } = render(<AppFactory />)
    expect(asFragment()).toMatchSnapshot()
  })
})
