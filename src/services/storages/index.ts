import { CookieStorage } from './cookie.storage'
import { LocalStorage } from './local.storage'

export const localStorage = new CookieStorage()
export const cookieStorage = new LocalStorage()
