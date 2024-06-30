import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

export interface CandidateFormType {
  firstName: string;
  lastName: string;
  statusId: string;
}
