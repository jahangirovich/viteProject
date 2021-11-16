import { StorageInterface } from './types'

export class LocalStorage implements StorageInterface {
  _storage: Storage = window.localStorage
  set(name: string, value: string): void {
    return this._storage.setItem(name, value)
  }
  get(name: string): string | null {
    return this._storage.getItem(name)
  }
  delete(name: string): void {
    this.set(name, '')
  }
}
