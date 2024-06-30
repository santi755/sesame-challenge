import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import type { Candidate, CandidateDTO } from '@core/modules/vacancies/domain/Candidate';

import { useVacancyStore } from '@src/stores/vacancy';
import { useCandidateStatusStore } from '@src/stores/candidateStatus';
import useListCandidatesByVacancy from '@src/composables/use-cases/ListCandidatesByVacancy';
import useCreateCandidate from '@src/composables/use-cases/CreateCandidate';
import useUpdateCandidate from '@src/composables/use-cases/UpdateCandidate';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([]);
  const searchText = ref('');

  const vacancyStore = useVacancyStore();
  const vacancyId = vacancyStore.getVacancyId();

  const candidatesBySearchText = computed(() => {
    return candidates.value.filter((candidate) => {
      const completeName = `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
      const search = searchText.value.toLowerCase();

      return completeName.includes(search);
    });
  });

  const candidatesGroupedByStatus = computed(() => {
    const candidateStatusStore = useCandidateStatusStore();
    const groupedByStatus = candidateStatusStore.candidateStatus.map((status) => {
      const candidatesFiltered = candidatesBySearchText.value.filter(
        (candidate) => candidate.statusId === status.id
      );

      return {
        ...status,
        candidates: candidatesFiltered
      };
    });

    return groupedByStatus;
  });

  const getCandidateById = (candidateId: string) => {
    return candidates.value.find((candidate) => candidate.id === candidateId);
  };

  const createCandidate = async (candidate: CandidateDTO) => {
    try {
      const { createCandidate } = useCreateCandidate();
      await createCandidate.execute(candidate, vacancyId);
      listCandidatesByVacancy();
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  const updateCandidate = async (candidateId: string, candidate: CandidateDTO) => {
    try {
      const { updateCandidate } = useUpdateCandidate();
      await updateCandidate.execute(candidateId, candidate, vacancyId);
      listCandidatesByVacancy();
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  const listCandidatesByVacancy = async () => {
    try {
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
      updatedAt: candidate.updatedAt,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      statusId: candidate.statusId,
      vacancyId: candidate.vacancyId
    }));
  };

  return {
    candidates,
    candidatesGroupedByStatus,
    getCandidateById,
    searchText,
    listCandidatesByVacancy,
    createCandidate,
    updateCandidate
  };
});
