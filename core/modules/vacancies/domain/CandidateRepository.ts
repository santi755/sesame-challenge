import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

export default interface CandidateRepository {
  save(candidate: Candidate): Promise<Candidate>;
  update(candidate: Candidate): Promise<Candidate>;
  findAll(vacancyId: string): Promise<Candidate[]>;
}
