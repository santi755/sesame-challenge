import NotFoundException from '@core/modules/shared/application/exceptions/NotFoundException';

export default class VacancyIdNotFoundException extends NotFoundException {
  constructor() {
    super('Vacancy ID not found', 'vacancy_not_found');
  }
}
