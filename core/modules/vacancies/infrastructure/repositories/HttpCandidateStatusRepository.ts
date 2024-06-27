import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';
import type HttpConnector from '@core/modules/vacancies/infrastructure/http/HttpConnector';

@injectable()
class HttpCandidateStatusRepository implements CandidateStatusRepository {
  constructor(
    @inject(TYPES.HttpConnector)
    private httpConnector: HttpConnector
  ) {}

  findAll(vacancyId: string): Promise<CandidateStatus[]> {
    return this.httpConnector.get<CandidateStatus[]>(`/candidate-status/${vacancyId}`);
  }
}

export default HttpCandidateStatusRepository;
