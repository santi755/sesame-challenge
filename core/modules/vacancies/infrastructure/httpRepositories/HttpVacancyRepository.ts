import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';
import type HttpConnector from '@core/modules/vacancies/infrastructure/http/HttpConnector';
import type VacancyRepository from '@core/modules/vacancies/domain/VacancyRepository';
import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';

// @ts-ignore
@injectable()
class HttpVacancyRepository implements VacancyRepository {
  constructor(
    // @ts-ignore
    @inject(TYPES.HttpConnector)
    private httpConnector: HttpConnector
  ) {}

  findById(vacancyId: string): Promise<{ data: Vacancy }> {
    return this.httpConnector.get<{ data: Vacancy }>(`/vacancies/${vacancyId}`);
  }
}

export default HttpVacancyRepository;
