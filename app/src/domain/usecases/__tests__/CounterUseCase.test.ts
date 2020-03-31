import { CounterUseCase, CounterUseCaseOut } from '../CounterUseCase'
import { Counter } from '../../entities'
import { CounterUseCaseOutRestGateway } from '../../../adapters/gateways'
import {UseCaseFactory} from "../../../adapters";

describe('CounterUseCase', () => {
  describe('CounterUseCaseIn', () => {
    describe('getCounter of CounterUseCaseOut should be called', () => {
      let useCaseFactory: UseCaseFactory
      beforeAll(() => {
        useCaseFactory = new UseCaseFactory('someUrl')
      });

      it('should return right value', async () => {
        const counterUseCaseOut = useCaseFactory.getCounterUseCaseOut()

        // const promiseCounter1: Promise<Counter> = Promise.resolve(
        //   new Counter(10)
        // )
        // const promiseCounter: Promise<Counter> = Promise.resolve(
        //   new Counter(91)
        // )


        const counter10: Counter = new Counter(10)
        const spy = jest
          .spyOn(counterUseCaseOut, 'getCounter')
          .mockResolvedValue(counter10)
        //const counterUseCase = new CounterUseCase(counterUseCaseOutRestGateway)
        const counterUseCaseIn = useCaseFactory.getCounterUseCaseIn()
        await counterUseCaseIn.getCounter()
        expect(spy).toBeCalled()
        //expect(spy).toHaveReturnedWith(counter10)

        spy.mockRestore()
      })
    })
  })
})
