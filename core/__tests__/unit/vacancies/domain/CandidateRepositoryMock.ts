import { expect, vi } from 'vitest';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

export default class CandidateRepositoryMock implements CandidateRepository {
  saveMock = vi.fn();
  updateMock = vi.fn();
  findAllMock = vi.fn();

  async save(candidate: Candidate): Promise<{ data: Candidate }> {
    this.saveMock(candidate);
    return { data: candidate };
  }

  async update(candidateId: string, candidate: Candidate): Promise<{ data: Candidate }> {
    this.updateMock(candidateId, candidate);
    return { data: candidate };
  }

  async findAll(vacancyId: string): Promise<{ data: Candidate[] }> {
    this.findAllMock(vacancyId);
    return { data: [] };
  }

  shouldSave(): void {
    expect(this.saveMock).toHaveBeenCalled();
  }

  shouldNotSave(): void {
    expect(this.saveMock).not.toHaveBeenCalled();
  }

  shouldUpdate(): void {
    expect(this.updateMock).toHaveBeenCalled();
  }

  shouldNotUpdate(): void {
    expect(this.updateMock).not.toHaveBeenCalled();
  }

  shouldFindAll(): void {
    expect(this.findAllMock).toHaveBeenCalled();
  }
}
