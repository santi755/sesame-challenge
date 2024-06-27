export default class ApplicationException extends Error {
  constructor(
    public message: string,
    public code: string
  ) {
    super(message);
    this.code = code;
  }
}
