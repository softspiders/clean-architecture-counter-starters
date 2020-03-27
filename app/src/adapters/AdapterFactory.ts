import {CounterUseCaseOutRestGateway} from "./gateways";
import {CounterUseCaseIn, CounterUseCaseOut} from "../domain/usecases";
import CounterUseCaseInReactPresenter from "./presenters/CounterUseCaseInReactPresenter";

interface CounterPresenterProps {
  functions: { handleIncrementClick: () => Promise<void> }
  state: { counter: number }
}

export class AdapterFactory {

  public static getReactPresenter(): (counterUseCaseIn: CounterUseCaseIn) => CounterPresenterProps {
    return CounterUseCaseInReactPresenter
  }

  public static getCounterRestGateway(url: string): CounterUseCaseOut {
    return new CounterUseCaseOutRestGateway(url)
  }
}
