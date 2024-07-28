// TODO: Refactor to type as enum
enum EnvironmentOptions {
  VITE_APP_API_URL = 'VITE_APP_API_URL',
  VITE_APP_API_KEY = 'VITE_APP_API_KEY',
  VITE_APP_VACANCY_ID = 'VITE_APP_VACANCY_ID'
}

export default class EnvConfig {
  static get(key: string): string {
    const env = import.meta.env;

    if (!(key in EnvironmentOptions)) {
      throw new Error(`Env variable ${key} not found`);
    }

    return env[key];
  }
}
