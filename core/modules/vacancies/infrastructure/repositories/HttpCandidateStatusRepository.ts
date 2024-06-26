import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

class HttpCandidateStatusRepository implements CandidateStatusRepository {
  findAll(): Promise<CandidateStatus[]> {
    throw new Error('Method not implemented.');
  }
}

export default HttpCandidateStatusRepository;
