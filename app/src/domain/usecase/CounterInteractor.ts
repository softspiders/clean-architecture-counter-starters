import { Counter } from '../entity'

export interface CounterInteractorIn {
  getCounter(): Promise<number>
  increment(): Promise<number>
}

export interface CounterInteractorOut {
  getCounter(): Promise<Counter>
  updateCounter(counter: Counter): Promise<Counter>
}

export class CounterInteractor implements CounterInteractorIn {
  constructor(private counterOut: CounterInteractorOut) {}

  async getCounter(): Promise<number> {
    const newCounter: Counter = await this.counterOut.getCounter()
    return newCounter.counter
  }

  async increment(): Promise<number> {
    const currentCounter: Counter = await this.counterOut.getCounter()
    const newCounter: Counter = new Counter(currentCounter.counter + 1)
    const resultCounter: Counter = await this.counterOut.updateCounter(
      newCounter
    )

    return resultCounter.counter
  }
}
