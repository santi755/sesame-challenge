import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate, CreateCandidateDTO } from '@core/modules/vacancies/domain/Candidate';

@injectable()
export default class CreateCandidate {
  constructor(
    @inject(TYPES.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async execute(candidateDto: CreateCandidateDTO, vacancyId: string): Promise<{ data: Candidate }> {
    this.validateCandidate(candidateDto);

    const candidate: Candidate = {
      ...candidateDto,
      vacancyId
    };

    return this.candidateRepository.save(candidate);
  }

  private validateCandidate(candidate: CreateCandidateDTO): void {
    if (!candidate) {
      throw new Error('Candidate not found');
    }
  }
}
