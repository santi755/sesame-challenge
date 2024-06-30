import { expect, vi } from 'vitest';

import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

export default class CandidateStatusRepositoryMock implements CandidateStatusRepository {
  findAllMock = vi.fn();

  async findAll(vacancyId: string): Promise<{ data: CandidateStatus[] }> {
    return this.findAllMock(vacancyId);
  }

  shouldFindAll(): void {
    expect(this.findAllMock).toHaveBeenCalled();
  }
}
