import { CounterUseCase, CounterUseCaseOut } from '../CounterUseCase'
import { Counter } from '../../entities'
import { UseCaseFactory } from '../../../adapters'

describe('CounterUseCase', () => {
  describe('CounterUseCaseIn', () => {
    describe('getCounter of CounterUseCaseOut should be called', () => {
      let useCaseFactory: UseCaseFactory
      beforeAll(() => {
        useCaseFactory = new UseCaseFactory('someUrl')
      })

      it('should return right value', async () => {
        const useCaseFactory = new UseCaseFactory('someUrl')
        const COUNTER_VALUE = 99
        jest
          .spyOn(useCaseFactory.getCounterUseCaseOut(), 'getCounter')
          .mockResolvedValue(new Counter(COUNTER_VALUE))
        expect(await useCaseFactory.getCounterUseCaseIn().getCounter()).toBe(
          COUNTER_VALUE
        )
      })
    })
  })
})
