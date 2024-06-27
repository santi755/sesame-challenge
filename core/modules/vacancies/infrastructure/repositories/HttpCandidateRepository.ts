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

  save(candidate: Candidate): Promise<Candidate> {
    return this.httpConnector.post<Candidate>('/candidates', candidate);
  }
  update(candidateId: string, candidate: Candidate): Promise<Candidate> {
    return this.httpConnector.put<Candidate>(`/candidates/${candidateId}`, candidate);
  }
  findAll(vacancyId: string): Promise<Candidate[]> {
    return this.httpConnector.get<Candidate[]>(`/vacancies/${vacancyId}/candidates`);
  }
}

export default HttpCandidateRepository;
