import { ref } from 'vue';
import { defineStore } from 'pinia';

import useListCandidatesByVacancy from '@src/composables/use-cases/ListCandidatesByVacancy';
import useCreateCandidate from '@src/composables/use-cases/CreateCandidate';
import EnvConfig from '@core/config/env/EnvConfig';
import type { Candidate, CandidateDTO } from '@core/modules/vacancies/domain/Candidate';
import useUpdateCandidate from '@src/composables/use-cases/UpdateCandidate';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([]);

  const createCandidate = async (candidate: CandidateDTO) => {
    try {
      const vacancyId = EnvConfig.get('VITE_APP_SESAME_VACANCY_ID');
      const { createCandidate } = useCreateCandidate();
      await createCandidate.execute(candidate, vacancyId);
      listCandidatesByVacancy();
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  const updateCandidate = async (candidateId: string, candidate: CandidateDTO) => {
    try {
      const vacancyId = EnvConfig.get('VITE_APP_SESAME_VACANCY_ID');
      const { updateCandidate } = useUpdateCandidate();
      await updateCandidate.execute(candidateId, candidate, vacancyId);
      listCandidatesByVacancy();
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  const listCandidatesByVacancy = async () => {
    try {
      const vacancyId = EnvConfig.get('VITE_APP_SESAME_VACANCY_ID');
      const { listCandidatesByVacancy } = useListCandidatesByVacancy();
      const response = await listCandidatesByVacancy.execute(vacancyId);
      candidates.value = candidatesAdapter(response.data);
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  const candidatesAdapter = (candidates: Candidate[]) => {
    return candidates.map((candidate: Candidate) => ({
      id: candidate.id,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      statusId: candidate.statusId,
      vacancyId: candidate.vacancyId
    }));
  };

  return {
    candidates,
    listCandidatesByVacancy,
    createCandidate,
    updateCandidate
  };
});
