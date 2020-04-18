import {
  CounterInteractor,
  CounterUseCaseIn,
  CounterUseCaseOut
} from '../domain/usecases'
import { CounterRestGateway } from './gateways'

export class AdapterFactory {
  private readonly counterUseCaseIn: CounterUseCaseIn
  private readonly counterUseCaseOut: CounterRestGateway

  constructor() {
    this.counterUseCaseOut = new CounterRestGateway('http://localhost:3001')
    this.counterUseCaseIn = new CounterInteractor(this.counterUseCaseOut)
  }

  getCounterUseCaseIn(): CounterUseCaseIn {
    return this.counterUseCaseIn
  }

  getCounterUseCaseOut(): CounterUseCaseOut {
    return this.counterUseCaseOut
  }
}
