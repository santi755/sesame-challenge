import ApplicationException from '@core/modules/shared/application/exceptions/ApplicationException';

export default class NotFoundException extends ApplicationException {
  constructor(
    public message: string,
    public code: string
  ) {
    super(message, code);
  }
}
