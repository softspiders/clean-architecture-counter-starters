import { CounterUseCaseOutRestGateway } from './gateways'
import {
  CounterUseCase,
  CounterUseCaseIn,
  CounterUseCaseOut
} from '../domain/usecases'

export class UseCaseFactory {
  private readonly counterUseCase: CounterUseCase
  private readonly counterRestGateway: CounterUseCaseOut

  constructor(restApiUrl: string) {
    this.counterRestGateway = new CounterUseCaseOutRestGateway(restApiUrl)
    this.counterUseCase = new CounterUseCase(this.counterRestGateway)
  }

  getCounterUseCaseIn(): CounterUseCaseIn {
    return this.counterUseCase
  }

  getCounterUseCaseOut(): CounterUseCaseOut {
    return this.counterRestGateway
  }
}
