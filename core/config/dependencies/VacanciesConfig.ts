import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import InMemoryCantidateRepository from '@core/modules/vacancies/infrastructure/inMemoryRepository/InMemoryCantidateRepository';
import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import InMemoryCandidateStatusRepository from '@core/modules/vacancies/infrastructure/inMemoryRepository/InMemoryCantidateStatusRepository';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import InMemoryVacancyRepository from '@core/modules/vacancies/infrastructure/inMemoryRepository/InMemoryVacancyRepository';
import type VacancyRepository from '@core/modules/vacancies/domain/VacancyRepository';
import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';
import ListCandidatesByVacancy from '@core/modules/vacancies/application/ListCandidatesByVacancy';
import UpdateCandidate from '@core/modules/vacancies/application/UpdateCandidate';
import ListCandidateStatus from '@core/modules/vacancies/application/ListCandidateStatus';
import GetVacancyById from '@core/modules/vacancies/application/GetVacancyById';

export function configureVacancies(container: Container) {
  // Repositories
  container
    .bind<CandidateRepository>(TYPES.CandidateRepository)
    .to(InMemoryCantidateRepository)
    .inSingletonScope();
  container
    .bind<CandidateStatusRepository>(TYPES.CandidateStatusRepository)
    .to(InMemoryCandidateStatusRepository)
    .inSingletonScope();
  container
    .bind<VacancyRepository>(TYPES.VacancyRepository)
    .to(InMemoryVacancyRepository)
    .inSingletonScope();

  // Use cases
  container.bind<CreateCandidate>(TYPES.CreateCandidate).to(CreateCandidate);
  container
    .bind<ListCandidatesByVacancy>(TYPES.ListCandidatesByVacancy)
    .to(ListCandidatesByVacancy);
  container.bind<UpdateCandidate>(TYPES.UpdateCandidate).to(UpdateCandidate);
  container.bind<ListCandidateStatus>(TYPES.ListCandidateStatus).to(ListCandidateStatus);
  container.bind<GetVacancyById>(TYPES.GetVacancyById).to(GetVacancyById);
}
