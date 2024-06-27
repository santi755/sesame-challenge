import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

@injectable()
export default class ListCandidatesByVacancy {
  constructor(
    @inject(TYPES.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async execute(vacancyId: string): Promise<Candidate[]> {
    if (!vacancyId) {
      throw new Error('Vacancy ID is required'); // Create custom error class, e.g. MissingVacancyIdError
    }

    return this.candidateRepository.findAll(vacancyId);
  }
}
