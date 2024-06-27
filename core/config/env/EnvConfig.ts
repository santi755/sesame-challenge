export default class EnvConfig {
  static get(key: string): string {
    const env = import.meta.env;

    if (!env[key]) {
      throw new Error(`Env variable ${key} not found`);
    }

    return env[key];
  }
}
