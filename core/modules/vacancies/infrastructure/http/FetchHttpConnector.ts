import { injectable } from 'inversify';

import type HttpConnector from '@core/modules/vacancies/infrastructure/http/HttpConnector';
import EnvConfig from '@core/config/env/EnvConfig';

// @ts-ignore
@injectable()
export default class FetchHttpConnector implements HttpConnector {
  constructor(
    private baseUrl = EnvConfig.get('VITE_APP_API_URL'),
    private apiKey = EnvConfig.get('VITE_APP_API_KEY')
  ) {}

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
        ...options.headers
      }
    });

    return response.json();
  }

  get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) });
  }

  put<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) });
  }
}
