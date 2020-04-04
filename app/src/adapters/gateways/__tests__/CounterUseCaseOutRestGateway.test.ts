import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

//import fetch from 'unfetch'

//jest.mock('unfetch')

describe('CounterUseCaseOutRestGateway', () => {
  it('should ...', async () => {
    // fetch.mockReturnValue(Promise.resolve(new Response('4')))
    // fetch.mockResponse(() => callMyApi().then(res => ({body: res}))
    // let response = await fetch();

    fetch.resetMocks()
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
  })
})
