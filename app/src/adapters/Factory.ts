import { CounterUseCaseOutRestGateway } from './gateways'
import {
  CounterUseCase,
  CounterUseCaseIn,
  CounterUseCaseOut
} from '../domain/usecases'

export class Factory {
  private readonly counterUseCase: CounterUseCase

  constructor(restApiUrl: string) {
    const counterRestGateway = new CounterUseCaseOutRestGateway(restApiUrl)
    this.counterUseCase = new CounterUseCase(counterRestGateway)
  }

  getCounterUseCase(): CounterUseCaseIn {
    return this.counterUseCase
  }
}
