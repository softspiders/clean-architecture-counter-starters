import { CounterUseCaseOutRestGateway } from './gateways'
import CounterUseCaseInReactPresenter from './presenters/CounterUseCaseInReactPresenter'

export class AdapterFactory {
  public static getReactPresenter = () => CounterUseCaseInReactPresenter
  public static getCounterRestGateway = (url: string) =>
    new CounterUseCaseOutRestGateway(url)
}
