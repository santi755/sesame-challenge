export interface Candidate {
  id?: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  vacancyId: string;
  statusId: string;
}

export interface CandidateDTO {
  firstName: string;
  lastName: string;
  statusId: string;
}
