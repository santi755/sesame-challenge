import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

export default interface CandidateStatusRepository {
  findAll(): Promise<CandidateStatus[]>;
}
