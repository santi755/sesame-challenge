import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate, CandidateDTO } from '@core/modules/vacancies/domain/Candidate';
import CandidateIdNotFoundException from '@core/modules/vacancies/application/exceptions/CandidateIdNotFoundException';
import CandidateNotFoundException from '@core/modules/vacancies/application/exceptions/CandidateNotFoundException';

@injectable()
export default class UpdateCandidate {
  constructor(
    @inject(TYPES.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async execute(
    candidateId: string,
    candidateDto: CandidateDTO,
    vacancyId: string
  ): Promise<{ data: Candidate }> {
    this.validateCandidateId(candidateId);
    this.validateCandidate(candidateDto);

    const candidate: Candidate = {
      ...candidateDto,
      vacancyId
    };

    return this.candidateRepository.update(candidateId, candidate);
  }

  private validateCandidateId(candidateId: string): void {
    if (!candidateId) {
      throw new CandidateIdNotFoundException();
    }
  }

  private validateCandidate(candidate: CandidateDTO): void {
    if (!candidate) {
      throw new CandidateNotFoundException();
    }
  }
}
