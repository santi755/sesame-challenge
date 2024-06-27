import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

@injectable()
export default class CreateCandidate {
  constructor(
    @inject(TYPES.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async execute(candidate: Candidate): Promise<Candidate> {
    this.validateCandidate(candidate);

    return this.candidateRepository.save(candidate);
  }

  private validateCandidate(candidate: Candidate): void {
    if (!candidate) {
      throw new Error('Candidate not found');
    }
  }
}
