import { ref } from 'vue';
import { defineStore } from 'pinia';

import useListCandidatesByVacancy from '@src/composables/use-cases/ListCandidatesByVacancy';
import useCreateCandidate from '@src/composables/use-cases/CreateCandidate';
import EnvConfig from '@core/config/env/EnvConfig';
import type { Candidate, CreateCandidateDTO } from '@core/modules/vacancies/domain/Candidate';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([]);
  const showCandidateModal = ref(false);

  const toggleCandidateModal = (show: boolean) => {
    showCandidateModal.value = show;
  };

  const createCandidate = async (candidate: CreateCandidateDTO) => {
    try {
      const vacancyId = EnvConfig.get('VITE_APP_SESAME_VACANCY_ID');
      const { createCandidate } = useCreateCandidate();
      await createCandidate.execute(candidate, vacancyId);
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
      candidates.value = response.data;
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  return {
    candidates,
    showCandidateModal,
    toggleCandidateModal,
    listCandidatesByVacancy,
    createCandidate
  };
});
