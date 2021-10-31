export interface StorageInterface {
  set: (name: string, value: string, options?: ObjectType) => void
  get: (name: string) => string | undefined | null
  delete: (name: string) => void
}
export type ObjectType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any
}
