import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useVacancyStore } from '@src/stores/vacancy';
import useListCandidateStatus from '@src/composables/use-cases/ListCandidateStatus';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

export const useCandidateStatusStore = defineStore('candidateStatus', () => {
  const candidateStatus = ref<CandidateStatus[]>([]);

  const vacancyStore = useVacancyStore();
  const vacancyId = vacancyStore.getVacancyId();

  const listCandidateStatus = async () => {
    try {
      const { listCandidateStatus } = useListCandidateStatus();
      const response = await listCandidateStatus.execute(vacancyId);
      candidateStatus.value = candidateStatusAdapter(response.data);
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
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
