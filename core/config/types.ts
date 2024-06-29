// TODO: Refactor this moving Symbol to each file that uses it
export const TYPES = {
  // Repositories
  CandidateRepository: Symbol.for('CandidateRepository'),
  CandidateStatusRepository: Symbol.for('CandidateStatusRepository'),
  VacancyRepository: Symbol.for('VacancyRepository'),

  // Use cases
  CreateCandidate: Symbol.for('CreateCandidate'),
  ListCandidatesByVacancy: Symbol.for('ListCandidatesByVacancy'),
  UpdateCandidate: Symbol.for('UpdateCandidate'),
  ListCandidateStatus: Symbol.for('ListCandidateStatus'),
  GetVacancyById: Symbol.for('GetVacancyById'),

  HttpConnector: Symbol.for('HttpConnector')
};
