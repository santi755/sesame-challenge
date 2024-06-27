import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import HttpCandidateRepository from '@core/modules/vacancies/infrastructure/repositories/HttpCandidateRepository';
import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import HttpCandidateStatusRepository from '@core/modules/vacancies/infrastructure/repositories/HttpCandidateStatusRepository';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';
import ListCandidatesByVacancy from '@core/modules/vacancies/application/ListCandidatesByVacancy';

export function configureVacancies(container: Container) {
  // Repositories
  container.bind<CandidateRepository>(TYPES.CandidateRepository).to(HttpCandidateRepository);
  container
    .bind<CandidateStatusRepository>(TYPES.CandidateStatusRepository)
    .to(HttpCandidateStatusRepository);

  // Use cases
  container.bind<CreateCandidate>(TYPES.CreateCandidate).to(CreateCandidate);
  container
    .bind<ListCandidatesByVacancy>(TYPES.ListCandidatesByVacancy)
    .to(ListCandidatesByVacancy);
}
