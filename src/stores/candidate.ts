import { ref } from 'vue';
import { defineStore } from 'pinia';

import useListCandidatesByVacancy from '@src/composables/use-cases/ListCandidatesByVacancy';
import EnvConfig from '@core/config/env/EnvConfig';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([]);

  const listCandidatesByVacancy = async () => {
    const { listCandidatesByVacancy } = useListCandidatesByVacancy();
    candidates.value = await listCandidatesByVacancy.execute(
      EnvConfig.get('VITE_APP_SESAME_VACANCY_ID')
    );
  };

  return {
    candidates,
    listCandidatesByVacancy
  };
});
