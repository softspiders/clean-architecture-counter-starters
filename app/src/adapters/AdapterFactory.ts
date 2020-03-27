import {CounterUseCaseOutRestGateway} from "./gateways";
import {CounterUseCaseIn, CounterUseCaseOut} from "../domain/usecases";
import CounterUseCaseInReactPresenter from "./presenters/CounterUseCaseInReactPresenter";

export class AdapterFactory {
  // public static getReactPresenter(): CounterUseCaseIn {
  //   return CounterUseCaseInReactPresenter
  // }

  public static getCounterRestGateway(url: string): CounterUseCaseOut {
    return new CounterUseCaseOutRestGateway(url)
  }
}
