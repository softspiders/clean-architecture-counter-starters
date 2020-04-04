import { CounterUseCaseOutRestGateway } from '../CounterUseCaseOutRestGateway'
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks()

describe('CounterUseCaseOutRestGateway', () => {
  const ENDPOINT = 'ENDPOINT'
  const ENDPOINT_URL = `http://${ENDPOINT}`
  const COUNTER_VALUE = 99
  const COUNTER_ID = 9

  describe('getCounter()', () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })

    it('Should execute http://someUrl/counter request and only once', async () => {
      fetchMock.mockResponses([JSON.stringify([{}]), {}])

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      await counterGateway.getCounter()

      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(fetchMock.mock.calls[0][0]).toEqual(`${ENDPOINT_URL}/counter`)
    })

    it('Should return right value', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify([{ counter: COUNTER_VALUE, id: COUNTER_ID }])
      )

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      expect((await counterGateway.getCounter()).counter).toBe(COUNTER_VALUE)
    })
  })
})
