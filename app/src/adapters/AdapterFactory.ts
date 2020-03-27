import {CounterUseCaseOutRestGateway} from "./gateways";
import {CounterUseCaseOut} from "../domain/usecases";
import CounterUseCaseInReactPresenter from "./presenters/CounterUseCaseInReactPresenter";

export class AdapterFactory {

  public static getReactPresenter() {
    return CounterUseCaseInReactPresenter
  }

  public static getCounterRestGateway(url: string): CounterUseCaseOut {
    return new CounterUseCaseOutRestGateway(url)
  }
}
