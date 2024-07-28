import { injectable } from 'inversify';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

// @ts-ignore
@injectable()
class InMemoryCandidateStatusRepository implements CandidateStatusRepository {
  private candidateStatus: CandidateStatus[] = [
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be5',
      name: 'New',
      order: 1,
      color: 'accentGrass200',
      icon: 'InboxIcon'
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be6',
      name: 'Accepted',
      order: 2,
      color: 'accentTurquoise200',
      icon: 'UserIcon'
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be7',
      name: 'Interview',
      order: 3,
      color: 'fontLink',
      icon: 'SelectedIcon'
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be8',
      name: 'Selected',
      order: 4,
      color: 'accentBlue200',
      icon: 'ConfettiIcon'
    },
    {
      id: 'ac0ae28e-417c-4002-b2cd-416a61aa4be9',
      name: 'Discarded',
      order: 5,
      color: 'extracolorA300',
      icon: 'BanIcon'
    }
  ];

  findAll(): Promise<{ data: CandidateStatus[] }> {
    return Promise.resolve({ data: this.candidateStatus });
  }
}

export default InMemoryCandidateStatusRepository;
