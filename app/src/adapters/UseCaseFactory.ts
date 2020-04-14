import { CounterUseCaseOutRestGateway } from './gateways'
import {
  CounterInteractor,
  CounterUseCaseIn,
  CounterUseCaseOut
} from '../domain/usecases'

export class UseCaseFactory {
  private readonly counterUseCase: CounterInteractor
  private readonly counterRestGateway: CounterUseCaseOut

  constructor(restApiUrl: string) {
    this.counterRestGateway = new CounterUseCaseOutRestGateway(restApiUrl)
    this.counterUseCase = new CounterInteractor(this.counterRestGateway)
  }

  getCounterUseCaseIn(): CounterUseCaseIn {
    return this.counterUseCase
  }

  getCounterUseCaseOut(): CounterUseCaseOut {
    return this.counterRestGateway
  }
}
