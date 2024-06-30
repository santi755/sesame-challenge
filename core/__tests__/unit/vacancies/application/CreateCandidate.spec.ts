import { beforeEach, describe, expect, it } from 'vitest';

import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';
import CandidateRepositoryMock from '@core/__tests__/unit/vacancies/domain/CandidateRepositoryMock';
import CandidateMother from '@core/__tests__/unit/vacancies/domain/CandidateMother';

describe('CreateCandidate', () => {
  let candidateRepository: CandidateRepositoryMock;
  let createCandidate: CreateCandidate;

  beforeEach(() => {
    candidateRepository = new CandidateRepositoryMock();
    createCandidate = new CreateCandidate(candidateRepository);
  });

  describe('Execute', () => {
    it('should save a candidate', async () => {
      const candidate = CandidateMother.random();

      const expectedCandidate = await createCandidate.execute(candidate, candidate.vacancyId);

      expect(expectedCandidate.data).toEqual(candidate);
      candidateRepository.shouldSave();
    });
  });
});
