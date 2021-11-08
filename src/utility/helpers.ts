export function isJson(d: unknown): boolean {
  try {
    JSON.parse(d as string)
    return true
  } catch {
    return false
  }
}
