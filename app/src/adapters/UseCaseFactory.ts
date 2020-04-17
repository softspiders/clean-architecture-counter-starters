import { CounterRestGateway } from './gateways'
import {
  CounterInteractor,
  CounterUseCaseIn,
  CounterUseCaseOut
} from '../domain/usecases'

export class UseCaseFactory {
  private readonly counterUseCase: CounterInteractor
  //  private readonly counterRestGateway: CounterUseCaseOut

  constructor(private readonly counterRestGateway: CounterUseCaseOut) {
    this.counterUseCase = new CounterInteractor(this.counterRestGateway)
  }

  getCounterUseCaseIn(): CounterUseCaseIn {
    return this.counterUseCase
  }

  getCounterUseCaseOut(): CounterUseCaseOut {
    return this.counterRestGateway
  }
}
