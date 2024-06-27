export default interface HttpConnector {
  get<T>(endpoint: string, options?: RequestInit): Promise<T>;
  post<T>(endpoint: string, body: any, options?: RequestInit): Promise<T>;
  put<T>(endpoint: string, body: any, options?: RequestInit): Promise<T>;
}
