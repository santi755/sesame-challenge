import { injectable } from 'inversify';
import { faker } from '@faker-js/faker';

import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

// @ts-ignore
@injectable()
class HttpCandidateRepository implements CandidateRepository {
  private candidates: Candidate[] = [
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be4',
      updatedAt: '2021-09-29T14:00:00.000Z',
      firstName: 'John',
      lastName: 'Doe',
      vacancyId: 'ac0ae28e-417c-4002-b2cd-416a61aa4be4',
      statusId: 'ac0ae28e-417c-4002-b2cd-416a61aa4be5'
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be5',
      updatedAt: '2021-09-29T14:00:00.000Z',
      firstName: 'Jane',
      lastName: 'Doe',
      vacancyId: 'ac0ae28e-417c-4002-b2cd-416a61aa4be4',
      statusId: 'ac0ae28e-417c-4002-b2cd-416a61aa4be5'
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be6',
      updatedAt: '2021-09-29T14:00:00.000Z',
      firstName: 'Alice',
      lastName: 'Doe',
      vacancyId: 'ac0ae28e-417c-4002-b2cd-416a61aa4be4',
      statusId: 'ac0ae28e-417c-4002-b2cd-416a61aa4be6'
    }
  ];

  save(candidate: Candidate): Promise<{ data: Candidate }> {
    this.candidates.push({
      id: faker.string.uuid(),
      updatedAt: faker.date.recent().toISOString(),
      ...candidate
    });

    return new Promise((resolve) => resolve({ data: candidate }));
  }
  update(candidateId: string, candidate: Candidate): Promise<{ data: Candidate }> {
    const index = this.candidates.findIndex((candidate) => candidate.id === candidateId);
    this.candidates[index] = {
      ...this.candidates[index],
      updatedAt: faker.date.recent().toISOString(),
      ...candidate
    };

    return new Promise((resolve) => resolve({ data: candidate }));
  }
  findAll(vacancyId: string): Promise<{ data: Candidate[] }> {
    return new Promise((resolve) =>
      resolve({ data: this.candidates.filter((candidate) => candidate.vacancyId === vacancyId) })
    );
  }
}

export default HttpCandidateRepository;
