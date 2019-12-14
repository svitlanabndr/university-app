import Axios, { AxiosInstance, AxiosPromise, AxiosError } from 'axios';
import { storage } from '../utils/storage/storage';

interface IRequestHeaders {
  [key: string]: string;
}

interface IApi {
  adapter: AxiosInstance;
  makeRequest: <T>(
    url: string,
    type: any,
    payload?: any,
    headers?: IRequestHeaders,
    queryParams?: any
  ) => AxiosPromise<T>;
}

class Api implements IApi {
  adapter: AxiosInstance;
  constructor() {
    this.adapter = Axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
    });
    this.adapter.interceptors.response.use(
      (response: any) => response,
      async (error: AxiosError) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.code === 401
        ) {
          try {
            const refreshToken = storage.get('refreshToken');
            const res = await this.makeRequest<any>(
              'api/auth/tokens',
              'POST',
              {
                refreshToken
              }
            );
            error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
            const user = Axios.request(error.config);
            storage.set('accessToken', res.data.accessToken);
            storage.set('refreshToken', res.data.refreshToken);
            return Promise.resolve(user);
          } catch (error) {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public makeRequest<T>(
    url: string,
    type: any,
    payload?: any,
    headers: IRequestHeaders = {},
    queryParams: any = {}
  ): AxiosPromise<T> {
    const token = storage.get('accessToken');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    switch (type) {
      case 'GET':
        return this.adapter.get<T>(url, {
          headers,
          params: queryParams
        });
      case 'POST':
        return this.adapter.post<T>(url, payload, {
          headers,
          params: queryParams
        });
      case 'PUT':
        return this.adapter.put<T>(url, payload, {
          headers,
          params: queryParams
        });
      case 'PATCH':
        return this.adapter.patch<T>(url, payload, {
          headers,
          params: queryParams
        });
      case 'DELETE':
        return this.adapter.delete(url, {
          headers,
          params: queryParams
        });
      default:
        return this.adapter.get<T>(url, { headers, params: queryParams });
    }
  }
}

export const api = new Api();
