import { TUser } from '@/models'

export enum AuthActionsTypes {
  authUserByCredentials = 'authUserByCredentials',
  checkIsAuth = 'checkIsAuth',
}

export enum AuthMutationTypes {
  setIsAuth = 'setIsAuth',
  setFetchState = 'setFetchState',
}

export type AuthState = {
  isAuth: boolean
  currentUser: TUser | null
}

export enum AuthGettersTypes {
  isLoading = 'isLoading',
  isAuth = 'isAuth',
  userInfo = 'userInfo',
  userFullName = 'userFullName',
  userPhone = 'userPhone',
}
