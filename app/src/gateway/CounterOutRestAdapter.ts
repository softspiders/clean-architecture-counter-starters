import fetch from 'unfetch'
import { CounterOut } from '../domain/usecase'
import { Counter } from '../domain/entity'

export class CounterOutRestAdapter implements CounterOut {
  endpoint: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client: any

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.client = fetch
  }

  public async getCounter(): Promise<Counter> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.client(this._createUrl('/counter'))

      if (response.ok) {
        const json = await response.json()
        return new Counter(json[0].counter)
      }
      throw new Error(response.statusText)
    } catch (error) {
      throw error
    }
  }

  public async updateCounter(newCounter: Counter): Promise<Counter> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.client(this._createUrl(`/counter/1`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          counter: newCounter.counter,
          id: 1
        })
      })

      if (response.ok) {
        const json = await response.json()
        return new Counter(json.counter)
      }
      throw new Error(response.statusText)
    } catch (error) {
      throw error
    }
  }

  private _createUrl(resource: string): string {
    return this.endpoint + resource
  }
}
