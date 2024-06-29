import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

export default interface CandidateStatusRepository {
  findAll(vacancyId: string): Promise<{ data: CandidateStatus[] }>;
}
