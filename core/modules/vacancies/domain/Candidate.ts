export interface Candidate {
  id?: string;
  firstName: string;
  lastName: string;
  vacancyId: string;
  statusId: string;
}

export interface CreateCandidateDTO {
  firstName: string;
  lastName: string;
  statusId: string;
}

export interface UpdateCandidateDTO {
  id: string;
  firtName: string;
  lastName: string;
  statusId: string;
}
