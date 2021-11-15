import { isJson } from '@/utility'
import { localStorage } from '@/services/storages/index'

export const tokenKey = 't'
export const tokenRefreshKey = 'tr'

export const storageService = {
  getItem: (key: string) => {
    const storage = localStorage.get(key)
    if (!storage) return null
    else if (isJson(storage)) {
      return JSON.parse(storage)
    }
  },
  setItem: (key: string, value: string) => {
    localStorage.set(key, value)
  },
  clearItem: (key: string) => {
    localStorage.delete(key)
  },
}

export const tokenService = {
  getToken: (): string | null => {
    return storageService.getItem(tokenKey)?.v1
  },
  setToken: (v1: string): void => {
    storageService.setItem(tokenKey, JSON.stringify({ v1 }))
  },
  getRefreshToken: (): string | null => {
    return storageService.getItem(tokenRefreshKey)?.v2
  },
  setRefreshToken: (v2: string): void => {
    storageService.setItem(tokenRefreshKey, JSON.stringify({ v2 }))
  },
  clearRefreshToken: (): void => {
    storageService.clearItem(tokenRefreshKey)
  },
  clearToken: (): void => {
    storageService.clearItem(tokenKey)
  },
}
