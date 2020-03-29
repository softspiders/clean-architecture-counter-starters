import { CounterUseCaseOutRestGateway } from './gateways'
import { CounterUseCase, CounterUseCaseIn } from '../domain/usecases'

export class UseCaseFactory {
  private readonly counterUseCase: CounterUseCase

  constructor(restApiUrl: string) {
    const counterRestGateway = new CounterUseCaseOutRestGateway(restApiUrl)
    this.counterUseCase = new CounterUseCase(counterRestGateway)
  }

  getCounterUseCase(): CounterUseCaseIn {
    return this.counterUseCase
  }
}
