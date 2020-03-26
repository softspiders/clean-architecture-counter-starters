import { CounterIn } from './CounterIn'
import { Counter } from '../entity'

export interface CounterOut {
  getCounter(): Promise<Counter>
  updateCounter(counter: Counter): Promise<Counter>
}

export class CounterInteractor implements CounterIn {
  constructor(private counterOut: CounterOut) {}

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
