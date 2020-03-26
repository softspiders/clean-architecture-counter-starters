import { Counter } from '../entities'

export interface CounterIn {
  getCounter(): Promise<Counter>
  decrement(qty?: number): Promise<Counter>
  increment(qty?: number): Promise<Counter>
}

export class CounterInteractor implements CounterIn {
  higherBound = 10
  lowerBound = 0
  counter: Counter

  constructor(startNumber: number, lowerBound = 0, higherBound = 10) {
    this.counter = new Counter(startNumber)
    this.lowerBound = lowerBound
    this.higherBound = higherBound
  }

  getCounter(qty?: number): Promise<Counter> {
    return Promise.resolve(this.counter)
  }

  increment(qty?: number): Promise<Counter> {
    this.counter.increment(qty)

    if (this.counter.count >= this.higherBound) {
      this.counter = new Counter(this.higherBound)
    }

    return Promise.resolve(this.counter)
  }

  decrement(qty?: number): Promise<Counter> {
    this.counter.decrement(qty)

    if (this.counter.count <= this.lowerBound) {
      this.counter = new Counter(this.lowerBound)
    }

    return Promise.resolve(this.counter)
  }
}
