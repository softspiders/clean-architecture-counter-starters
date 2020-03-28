import { CounterUseCaseOutRestGateway } from './gateways'
import { CounterUseCase } from '../domain/usecases'

export class AdapterFactory {
  static getCounterUseCase(url: string): CounterUseCase {
    return new CounterUseCase(new CounterUseCaseOutRestGateway(url))
  }
}
