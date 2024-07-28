import type VacancyRepository from '@core/modules/vacancies/domain/VacancyRepository';
import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';
import { injectable } from 'inversify';

@injectable()
class InMemoryVacancyRepository implements VacancyRepository {
  private vacancies: Vacancy[] = [
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be4',
      name: 'Santiago M.'
    }
  ];

  async findById(vacancyId: string): Promise<{ data: Vacancy }> {
    const vacancy = this.vacancies.find((vacancy) => vacancy.id === vacancyId);

    if (!vacancy) {
      throw new Error('Vacancy not found');
    }

    return { data: vacancy };
  }
}

export default InMemoryVacancyRepository;
