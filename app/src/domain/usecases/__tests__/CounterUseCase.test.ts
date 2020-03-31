import { CounterUseCase, CounterUseCaseOut } from '../CounterUseCase'
import { Counter } from '../../entities'
import { CounterUseCaseOutRestGateway } from '../../../adapters/gateways'
import {UseCaseFactory} from "../../../adapters";

describe('CounterUseCase', () => {
  describe('CounterUseCaseIn', () => {
    describe('getCounter', () => {
      it('should return right value', async () => {
        const counterUseCaseOutRestGateway = new CounterUseCaseOutRestGateway(
          'someUrl'
        )

        // const promiseCounter1: Promise<Counter> = Promise.resolve(
        //   new Counter(10)
        // )
        // const promiseCounter: Promise<Counter> = Promise.resolve(
        //   new Counter(91)
        // )
        const counter10: Counter = new Counter(10)
        const spy = jest
          .spyOn(counterUseCaseOutRestGateway, 'getCounter')
          .mockResolvedValue(counter10)
        //const counterUseCase = new CounterUseCase(counterUseCaseOutRestGateway)
        const useCaseFactory = new UseCaseFactory('someUrl')
        const counterUseCase = useCaseFactory.getCounterUseCaseIn()
        await counterUseCase.getCounter()
        expect(spy).toBeCalled()
        //expect(spy).toHaveReturnedWith(counter10)

        spy.mockRestore()
      })
    })
  })
})
