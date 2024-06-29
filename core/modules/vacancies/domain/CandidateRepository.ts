import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

export default interface CandidateRepository {
  save(candidate: Candidate): Promise<{ data: Candidate }>;
  update(candidateId: string, candidate: Candidate): Promise<{ data: Candidate }>;
  findAll(vacancyId: string): Promise<{ data: Candidate[] }>;
}
