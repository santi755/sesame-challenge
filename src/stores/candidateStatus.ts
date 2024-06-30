import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { IconType } from '@src/types/icon';

import { useVacancyStore } from '@src/stores/vacancy';
import useListCandidateStatus from '@src/composables/use-cases/ListCandidateStatus';
import type { CandidateStatusFrontend } from '@src/types/candidateStatus';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';
import type { CandidateStatusStyle } from '@src/types/candidateStatus';

// TODO: Check with backend team how to get the color and icon for each status
const TEMPORAL_CANDIDATE_STATUS_STYLES: CandidateStatusStyle = new Map([
  ['New', { color: 'accentGrass200', icon: 'InboxIcon' }],
  ['Accepted', { color: 'accentTurquoise200', icon: 'UserIcon' }],
  ['Interview', { color: 'fontLink', icon: 'SelectedIcon' }],
  ['Selected', { color: 'accentBlue200', icon: 'ConfettiIcon' }],
  ['Discarded', { color: 'extracolorA300', icon: 'BanIcon' }]
]);

export const useCandidateStatusStore = defineStore('candidateStatus', () => {
  const candidateStatus = ref<CandidateStatusFrontend[]>([]);

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

  const candidateStatusAdapter = (status: CandidateStatus[]): CandidateStatusFrontend[] => {
    const sortedStatus = status.sort((a, b) => a.order - b.order);
    const InboxIcon: IconType = 'InboxIcon';

    return sortedStatus.map((status: CandidateStatus) => ({
      id: status.id,
      name: status.name,
      order: status.order,
      color: TEMPORAL_CANDIDATE_STATUS_STYLES.get(status.name)?.color || InboxIcon,
      icon: TEMPORAL_CANDIDATE_STATUS_STYLES.get(status.name)?.icon || InboxIcon
    }));
  };

  return {
    candidateStatus,
    listCandidateStatus
  };
});
