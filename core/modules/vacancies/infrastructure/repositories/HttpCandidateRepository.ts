import { injectable, inject } from 'inversify';
import { TYPES } from '@core/config/types';

import type HttpConnector from '@core/modules/vacancies/infrastructure/http/HttpConnector';
import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

@injectable()
class HttpCandidateRepository implements CandidateRepository {
  constructor(
    @inject(TYPES.HttpConnector)
    private httpConnector: HttpConnector
  ) {}

  save(candidate: Candidate): Promise<{ data: Candidate }> {
    return this.httpConnector.post<{ data: Candidate }>('/candidates', candidate);
  }
  update(candidateId: string, candidate: Candidate): Promise<{ data: Candidate }> {
    return this.httpConnector.put<{ data: Candidate }>(`/candidates/${candidateId}`, candidate);
  }
  findAll(vacancyId: string): Promise<{ data: Candidate[] }> {
    return this.httpConnector.get<{ data: Candidate[] }>(`/vacancies/${vacancyId}/candidates`);
  }
}

export default HttpCandidateRepository;
