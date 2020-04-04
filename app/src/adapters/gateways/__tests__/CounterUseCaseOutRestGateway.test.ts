import { CounterUseCaseOutRestGateway } from '../CounterUseCaseOutRestGateway'

describe('CounterUseCaseOutRestGateway', () => {
  const ENDPOINT = 'endpoint'
  const ENDPOINT_URL = `http://${ENDPOINT}`
  const COUNTER_VALUE = 99
  const COUNTER_ID = 9

  describe('getCounter()', () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })

    it('Should perform the http://endpoint/counter request, and only once', async () => {
      fetchMock.mockResponses([JSON.stringify([{}]), {}])

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      await counterGateway.getCounter()

      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(fetchMock.mock.calls[0][0]).toEqual(`${ENDPOINT_URL}/counter`)
    })

    it('Should return the correct value corresponding to the http-response', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify([{ counter: COUNTER_VALUE, id: COUNTER_ID }])
      )

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      expect((await counterGateway.getCounter()).counter).toBe(COUNTER_VALUE)
    })
  })
})
