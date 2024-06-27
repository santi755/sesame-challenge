import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';
import VacancyIdNotFoundException from '@core/modules/vacancies/application/exceptions/VacancyIdNotFoundException';

@injectable()
export default class ListCandidatesByVacancy {
  constructor(
    @inject(TYPES.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async execute(vacancyId: string): Promise<Candidate[]> {
    this.validateVacancyId(vacancyId);

    return this.candidateRepository.findAll(vacancyId);
  }

  private validateVacancyId(vacancyId: string): void {
    if (!vacancyId) {
      throw new VacancyIdNotFoundException();
    }
  }
}
