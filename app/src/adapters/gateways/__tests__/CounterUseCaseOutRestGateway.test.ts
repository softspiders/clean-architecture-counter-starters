jest.mock('unfetch')

import fetch from 'unfetch'

describe('CounterUseCaseOutRestGateway', () => {
  it('should ...', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')))

  })
})
