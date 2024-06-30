import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type VacancyRepository from '@core/modules/vacancies/domain/VacancyRepository';
import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';

// @ts-ignore
@injectable()
export default class GetVacancyById {
  constructor(
    // @ts-ignore
    @inject(TYPES.VacancyRepository)
    private vacancyRepository: VacancyRepository
  ) {}

  async execute(vacancyId: string): Promise<{ data: Vacancy }> {
    this.validateVacancyId(vacancyId);

    return this.vacancyRepository.findById(vacancyId);
  }

  private validateVacancyId(vacancyId: string) {
    if (!vacancyId) {
      throw new Error('Vacancy ID is required'); // TODO: Implement error handling logic
    }
  }
}
