import { beforeEach, describe, expect, it } from 'vitest';

import UpdateCandidate from '@core/modules/vacancies/application/UpdateCandidate';
import CandidateRepositoryMock from '@core/__tests__/unit/vacancies/domain/CandidateRepositoryMock';
import CandidateMother from '@core/__tests__/unit/vacancies/domain/CandidateMother';
import type { CandidateDTO } from '@core/modules/vacancies/domain/Candidate';

describe('CreateCandidate', () => {
  let candidateRepository: CandidateRepositoryMock;
  let updateCandidate: UpdateCandidate;

  beforeEach(() => {
    candidateRepository = new CandidateRepositoryMock();
    updateCandidate = new UpdateCandidate(candidateRepository);
  });

  describe('Execute', () => {
    it('should update a candidate', async () => {
      const candidate = CandidateMother.random();
      const candidateId = CandidateMother.candidateId();
      const candidateDTO: CandidateDTO = {
        firstName: candidate.firstName,
        lastName: candidate.lastName,
        statusId: candidate.statusId
      };

      const expectedCandidate = await updateCandidate.execute(
        candidateId,
        candidateDTO,
        candidate.vacancyId
      );

      expect(expectedCandidate.data).toEqual({
        ...candidateDTO,
        vacancyId: candidate.vacancyId
      });
    });
  });
});
