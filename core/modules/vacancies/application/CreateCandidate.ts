import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate, CandidateDTO } from '@core/modules/vacancies/domain/Candidate';

// @ts-ignore
@injectable()
export default class CreateCandidate {
  constructor(
    // @ts-ignore
    @inject(TYPES.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async execute(candidateDto: CandidateDTO, vacancyId: string): Promise<{ data: Candidate }> {
    this.validateCandidate(candidateDto);

    const candidate: Candidate = {
      ...candidateDto,
      vacancyId
    };

    return this.candidateRepository.save(candidate);
  }

  private validateCandidate(candidate: CandidateDTO): void {
    if (!candidate) {
      throw new Error('Candidate not found');
    }
  }
}
