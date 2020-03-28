import { CounterUseCaseOutRestGateway } from './gateways'
import { CounterUseCase } from '../domain/usecases'

export class AdapterFactory {
  static getCounterUseCase(url: string): CounterUseCase {
    const restGateway = new CounterUseCaseOutRestGateway(url)
    return new CounterUseCase(restGateway)
  }
}
