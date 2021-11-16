export type DTOReqLogin = {
  email: string
  password: string
}
export type DTOResLogin = {
  login: string
  password: string
}
export type DTOReqSignUp = {
  first_name: string
  last_name: string
  email: string
  password: string
  phone_number: number
  organization_name: string
}
export type DTORefreshToken = {
  token: string
}
