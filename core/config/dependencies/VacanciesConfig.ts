import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import HttpCandidateRepository from '@core/modules/vacancies/infrastructure/repositories/HttpCandidateRepository';
import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import HttpCandidateStatusRepository from '@core/modules/vacancies/infrastructure/repositories/HttpCandidateStatusRepository';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import HttpVacancyRepository from '@core/modules/vacancies/infrastructure/repositories/HttpVacancyRepository';
import type VacancyRepository from '@core/modules/vacancies/domain/VacancyRepository';
import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';
import ListCandidatesByVacancy from '@core/modules/vacancies/application/ListCandidatesByVacancy';
import UpdateCandidate from '@core/modules/vacancies/application/UpdateCandidate';
import ListCandidateStatus from '@core/modules/vacancies/application/ListCandidateStatus';
import GetVacancyById from '@core/modules/vacancies/application/GetVacancyById';

export function configureVacancies(container: Container) {
  // Repositories
  container.bind<CandidateRepository>(TYPES.CandidateRepository).to(HttpCandidateRepository);
  container
    .bind<CandidateStatusRepository>(TYPES.CandidateStatusRepository)
    .to(HttpCandidateStatusRepository);
  container.bind<VacancyRepository>(TYPES.VacancyRepository).to(HttpVacancyRepository);

  // Use cases
  container.bind<CreateCandidate>(TYPES.CreateCandidate).to(CreateCandidate);
  container
    .bind<ListCandidatesByVacancy>(TYPES.ListCandidatesByVacancy)
    .to(ListCandidatesByVacancy);
  container.bind<UpdateCandidate>(TYPES.UpdateCandidate).to(UpdateCandidate);
  container.bind<ListCandidateStatus>(TYPES.ListCandidateStatus).to(ListCandidateStatus);
  container.bind<GetVacancyById>(TYPES.GetVacancyById).to(GetVacancyById);
}
