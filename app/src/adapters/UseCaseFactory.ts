import {
  CounterInteractor,
  CounterUseCaseIn,
  CounterUseCaseOut
} from '../domain/usecases'
import { CounterRestGateway } from './gateways'

export class UseCaseFactory {
  private readonly counterUseCaseIn: CounterUseCaseIn
  private readonly counterRestGateway: CounterRestGateway

  constructor() {
    this.counterRestGateway = new CounterRestGateway('http://localhost:3001')
    this.counterUseCaseIn = new CounterInteractor(this.counterRestGateway)
  }

  getCounterUseCaseIn(): CounterUseCaseIn {
    return this.counterUseCaseIn
  }

  getCounterUseCaseOut(): CounterUseCaseOut {
    return this.counterRestGateway
  }
}
