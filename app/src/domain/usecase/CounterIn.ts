export interface CounterIn {
  getCounter(): Promise<number>
  increment(): Promise<number>
}
