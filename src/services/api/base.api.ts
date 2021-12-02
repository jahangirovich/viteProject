import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { tokenService } from '@/services/storages/storage.service'

const API_VERSION = '/api/auth'

/* eslint-disable */
class BaseApi {
  private readonly baseApiUrl: string =
    process.env.VUE_APP_CORE_API_BASE_URL + API_VERSION

  service = axios.create({
    baseURL: this.baseApiUrl,
    timeout: 35000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  constructor(config: { baseUrl?: string } = {}) {
    if (config.baseUrl) {
      this.baseApiUrl = config.baseUrl
    }
    this.service.interceptors.request.use(requestInterceptionConfigOverride)
    this.service.interceptors.request.use(
      (response) =>
        responseInterceptionConfigOverride(response, this.service, this.service),
      (error) => {
        return Promise.reject({
          error: error,
          message: error?.message ?? '',
        })
      }
    )
  }

  get<T>(suffix: string, config?: AxiosRequestConfig) {
    return this.service.get<T>(`${this.baseApiUrl}/${suffix}/`, config)
  }

  post<T>(suffix: string, payload: Record<string, any>, config: AxiosRequestConfig = {}) {
    return this.service.post<T>(`${this.baseApiUrl}/${suffix}/`, payload, config)
  }

  put<T>(suffix: string, payload: Record<string, any>) {
    return this.service.put<T>(`${this.baseApiUrl}/${suffix}/`, payload)
  }

  delete<T>(suffix: string) {
    return axios.delete<T>(`${this.baseApiUrl}/${suffix}/`)
  }
}

export default BaseApi

export function isServerError(error: any): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined
}

const responseInterceptionConfigOverride = async (
  response,
  refreshInstance,
  requestInstance
) => {
  const res = response
  const originalRequest = response.config
  // if (res.status !== 200) {
  //   /// server ERROR
  //   return Promise.reject(res?.data ?? res);
  // } else {
  return res
  // /// response OK
  // if (!res.data?.error_code) {
  //   return res.data;
  // }
  // /// response NOT AUTH || 401
  // if (res.data?.error_code === 401 && originalRequest._retry) {
  //   // tokenService.removeRefreshToken();
  //   // tokenService.removeToken();
  //   // return doLogout();
  // }
  // else if (
  //   res.data?.error_code === errorNotAuthKey &&
  //   !originalRequest._retry
  // ) {
  //   originalRequest._retry = true;
  //   tokenService.removeToken();
  //   const refreshToken = tokenService.getRefreshToken();
  //   if (refreshToken !== "undefined" && refreshToken) {
  //     try {
  //       const response = await requestInstance.post(
  //         `${baseAPIUrl}/api/profile/auth_by_token`,
  //         {
  //           big_token: refreshToken,
  //         }
  //       );
  //
  //       if (response?.error_code === errorNotAuthKey) {
  //         tokenService.removeRefreshToken();
  //         tokenService.removeToken();
  //         return doLogout();
  //       }
  //
  //       tokenService.removeToken();
  //       const { small_token } = response;
  //       tokenService.setToken(small_token);
  //
  //       requestInstance.defaults.headers.common[
  //         "Authorization"
  //         ] = `${small_token}`;
  //       return requestInstance(originalRequest);
  //     } catch (e) {
  //       tokenService.removeToken();
  //       return {};
  //     }
  //   }
  // }
  // else {
  //   return Promise.reject(res.data);
  // }
  // }
}

function requestInterceptionConfigOverride(config) {
  const accessToken = tokenService.getToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  // config.headers["ch-language"] = storageService.getItem(LANG_KEY);
  return {
    ...config,
  }
}
