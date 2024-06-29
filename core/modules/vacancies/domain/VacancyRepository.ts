import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';

export default interface VacancyRepository {
  findById(vacancyId: string): Promise<{ data: Vacancy }>;
}
