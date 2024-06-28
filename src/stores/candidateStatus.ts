import { ref } from 'vue';
import { defineStore } from 'pinia';

import useListCandidateStatus from '@src/composables/use-cases/ListCandidateStatus';
import EnvConfig from '@core/config/env/EnvConfig';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

export const useCandidateStatusStore = defineStore('candidateStatus', () => {
  const candidateStatus = ref<CandidateStatus[]>([]);

  const listCandidateStatus = async () => {
    try {
      const vacancyId = EnvConfig.get('VITE_APP_SESAME_VACANCY_ID');
      const { listCandidateStatus } = useListCandidateStatus();
      const response = await listCandidateStatus.execute(vacancyId);
      candidateStatus.value = candidateStatusAdapter(response.data);
    } catch (error) {
      console.log('error => ', error); // TODO: Implement error handling logic
    }
  };

  const candidateStatusAdapter = (status: CandidateStatus[]) => {
    const sortedStatus = status.sort((a, b) => a.order - b.order);

    return sortedStatus.map((status: CandidateStatus) => ({
      id: status.id,
      name: status.name,
      order: status.order
    }));
  };

  return {
    candidateStatus,
    listCandidateStatus
  };
});
