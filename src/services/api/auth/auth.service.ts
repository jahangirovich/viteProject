import BaseApi from '@/services/api/base.api'
import { DTOReqLogin, DTOResLogin } from '@/services/api/auth/auth.dto'

enum apiEndpoints {
  login = 'login',
}

const BACKEND_URL = process.env.VUE_APP_CORE_API_BASE_URL
const API_VERSION = '/api/v3'

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
}

export const authApiService = new authService()
