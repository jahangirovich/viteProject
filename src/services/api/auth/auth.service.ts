import BaseApi from '@/services/api/base.api'
import {
  DTOReqLogin,
  DTOReqSignUp,
  DTOResLogin,
  DTORefreshToken,
} from '@/services/api/auth/auth.dto'

enum apiEndpoints {
  login = 'login',
  registration = 'users/sign-up',
  refreshToken = 'refresh-token',
}

const BACKEND_URL = process.env.VUE_APP_CORE_API_BASE_URL
const API_VERSION = '/api/auth'

class authService extends BaseApi {
  private endpoints = apiEndpoints

  constructor() {
    super({
      baseUrl: BACKEND_URL + API_VERSION,
    })
  }

  login(data: DTOReqLogin) {
    return this.post<DTOResLogin>(this.endpoints.login, data)
  }

  signUp(data: DTOReqSignUp) {
    return this.post<DTOReqSignUp>(this.endpoints.registration, data)
  }

  refreshToken(data: DTORefreshToken) {
    return this.post<DTORefreshToken>(this.endpoints.refreshToken, data)
  }
}

export const authApiService = new authService()
