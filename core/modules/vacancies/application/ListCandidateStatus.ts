import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

@injectable()
export default class ListCandidateStatus {
  constructor(
    @inject(TYPES.CandidateStatusRepository)
    private candidateStatusRepository: CandidateStatusRepository
  ) {}

  async execute(vacancyId: string): Promise<CandidateStatus[]> {
    return this.candidateStatusRepository.findAll(vacancyId);
  }
}
