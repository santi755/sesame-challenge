import { expect, vi } from 'vitest';

import type VacancyRepository from '@core/modules/vacancies/domain/VacancyRepository';
import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';

export default class VacancyRepositoryMock implements VacancyRepository {
  findByIdMock = vi.fn();

  async findById(vacancyId: string): Promise<{ data: Vacancy }> {
    return this.findByIdMock(vacancyId);
  }

  shouldFindById(): void {
    expect(this.findByIdMock).toHaveBeenCalled();
  }
}
