// export class Counter {
//   private readonly _counter: number
//
//   constructor(counter: number) {
//     this._counter = counter
//   }
//
//   get counter(): number {
//     return this._counter
//   }
// }
//

export class Counter {
  count: number

  constructor(startNumber: number) {
    this.count = startNumber
  }

  increment(qty?: number) {
    this.count += qty ? qty : 1
  }

  decrement(qty?: number) {
    this.count -= qty ? qty : 1
  }
}
