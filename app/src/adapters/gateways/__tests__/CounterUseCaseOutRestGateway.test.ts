import { CounterUseCaseOutRestGateway } from '../CounterUseCaseOutRestGateway'
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks()

describe('CounterUseCaseOutRestGateway', () => {
  describe('getCounter()', () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })

    it('Should execute http://someUrl/counter request and only once', async () => {
      fetchMock.mockResponses([JSON.stringify([{}]), {}])

      const counterGateway = new CounterUseCaseOutRestGateway('http://someUrl')
      await counterGateway.getCounter()

      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(fetchMock.mock.calls[0][0]).toEqual('http://someUrl/counter')
    })

    // xit('Should return right value', async () => {
    //   fetchMock.mockResponses([JSON.stringify([{}]), {status: 200}])
    //
    //   const counterGateway = new CounterUseCaseOutRestGateway('http://someUrl')
    //   await counterGateway.getCounter()
    //
    //   expect(fetchMock).toHaveBeenCalledTimes(1)
    //   expect(fetchMock.mock.calls[0][0]).toEqual('http://someUrl/counter')
    // })
  })
})
