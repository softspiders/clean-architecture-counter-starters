import { CounterUseCaseOutRestGateway } from '../CounterUseCaseOutRestGateway'
import { Counter } from '../../../domain/entities'

describe('CounterUseCaseOutRestGateway', () => {
  const ENDPOINT = 'endpoint'
  const ENDPOINT_URL = `http://${ENDPOINT}`
  const COUNTER_VALUE = 99
  const COUNTER_ID = 1

  beforeEach(() => {
    fetchMock.resetMocks()
  })

  describe('getCounter()', () => {
    it('Should perform the /counter request, and only once', async () => {
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
    it('Should throw an error when status not Ok', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify([{ counter: COUNTER_VALUE, id: COUNTER_ID }]),
        { status: 400 }
      )

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      await expect(counterGateway.getCounter()).rejects.toThrowError()
    })
  })

  describe('updateCounter()', () => {
    it('Should perform the /counter/id request, and only once', async () => {
      fetchMock.mockResponses([JSON.stringify([{}]), {}])

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      await counterGateway.updateCounter(new Counter(COUNTER_VALUE))

      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(fetchMock.mock.calls[0][0]).toEqual(
        `${ENDPOINT_URL}/counter/${COUNTER_ID}`
      )
    })
    it('Should return the correct value corresponding to the http-response', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({ counter: COUNTER_VALUE, id: COUNTER_ID })
      )

      const counterGateway = new CounterUseCaseOutRestGateway(ENDPOINT_URL)
      // expect(
      //   (await counterGateway.updateCounter(new Counter(COUNTER_VALUE))).counter
      // ).toBe(COUNTER_VALUE)

      const counter = (await counterGateway.updateCounter(
        new Counter(COUNTER_VALUE)
      )).counter

      expect(counter).toBe(COUNTER_VALUE)
    })
  })
})
