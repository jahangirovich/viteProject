import { CookieStorage } from './CookieStorage'
import { LocalStorage } from './LocalStorage'

export const _localStorage = new CookieStorage()
export const _cookie = new LocalStorage()
