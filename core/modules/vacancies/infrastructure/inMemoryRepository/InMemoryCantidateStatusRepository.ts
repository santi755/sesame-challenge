import { injectable } from 'inversify';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

// @ts-ignore
@injectable()
class InMemoryCandidateStatusRepository implements CandidateStatusRepository {
  private candidateStatus: CandidateStatus[] = [
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be5',
      name: 'Applied',
      order: 1
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be6',
      name: 'Interviewing',
      order: 2
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be7',
      name: 'Hired',
      order: 3
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be8',
      name: 'Rejected',
      order: 4
    }
  ];

  findAll(): Promise<{ data: CandidateStatus[] }> {
    return Promise.resolve({ data: this.candidateStatus });
  }
}

export default InMemoryCandidateStatusRepository;
