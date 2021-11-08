import { ObjectType, StorageInterface } from './types'

export class CookieStorage implements StorageInterface {
  delete(name: string): void {
    this.set(name, '', {
      'max-age': -1,
    })
  }
  set(name: string, value: string, options: ObjectType = {}): void {
    options = {
      path: '/',
      ...options,
    }
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString()
    }
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    for (const optionKey in options) {
      updatedCookie += '; ' + optionKey
      const optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }
    document.cookie = updatedCookie
  }
  get(name: string): string | undefined {
    const matches = document.cookie.match(
      new RegExp(
        // eslint-disable-next-line no-useless-escape
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
      )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
}
