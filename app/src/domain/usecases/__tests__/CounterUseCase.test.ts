import { CounterUseCase } from '../CounterUseCase'
import { Counter } from '../../entities'
import { UseCaseFactory } from '../../../adapters'

describe('CounterUseCase', () => {
  const COUNTER_VALUE = 99
  const SOME_COUNTER = new Counter(-1)
  describe('CounterUseCaseIn', () => {
    let useCaseFactory: UseCaseFactory
    beforeAll(() => {
      useCaseFactory = new UseCaseFactory('someUrl')
    })
    describe('getCounter()', () => {
      it('should return right value', async () => {
        jest
          .spyOn(useCaseFactory.getCounterUseCaseOut(), 'getCounter')
          .mockResolvedValue(new Counter(COUNTER_VALUE))
        expect(await useCaseFactory.getCounterUseCaseIn().getCounter()).toBe(
          COUNTER_VALUE
        )
      })
    })

    describe('increment()', () => {
      it('should call updateCounter with right value', async () => {
        jest
          .spyOn(useCaseFactory.getCounterUseCaseOut(), 'getCounter')
          .mockResolvedValue(new Counter(COUNTER_VALUE))

        const updateCounterSpy = jest
          .spyOn(useCaseFactory.getCounterUseCaseOut(), 'updateCounter')
          .mockResolvedValue(SOME_COUNTER)

        await useCaseFactory.getCounterUseCaseIn().increment()

        expect(updateCounterSpy.mock.calls.length).toBe(1)
        expect(updateCounterSpy.mock.calls[0][0]).toEqual(
          new Counter(COUNTER_VALUE + 1)
        )
      })
      it('should return right value', async () => {
        jest
          .spyOn(useCaseFactory.getCounterUseCaseOut(), 'getCounter')
          .mockResolvedValue(new Counter(COUNTER_VALUE))

        jest
          .spyOn(useCaseFactory.getCounterUseCaseOut(), 'updateCounter')
          .mockResolvedValue(new Counter(COUNTER_VALUE + 1))

        expect(await useCaseFactory.getCounterUseCaseIn().increment()).toEqual(
          COUNTER_VALUE + 1
        )
      })
    })
  })
})
