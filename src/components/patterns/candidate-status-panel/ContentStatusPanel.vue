<template>
  <div class="content-status-panel flex overflow-x-auto pb-4">
    <ColumnContent
      v-for="(status, key) in candidateStore.candidatesGroupedByStatus"
      :key="key"
      :status="status"
      :isDragging="isDragging"
      @drop="drop($event, status.id, updateCandidateOnDrop)"
    >
      <CardColumnContent
        v-for="(candidate, key) in status.candidates"
        :candidate="candidate"
        @dragstart="drag($event, candidate?.id)"
        :key="key"
      />
    </ColumnContent>
  </div>
</template>

<script setup lang="ts">
import ColumnContent from '@src/components/patterns/candidate-status-panel/content/ColumnContent.vue';
import CardColumnContent from '@src/components/patterns/candidate-status-panel/content/CardColumnContent.vue';
import { useCandidateStore } from '@src/stores/candidate';
import { useDraggable } from '@src/composables/utilities/useDraggable';
import type { CandidateDTO } from '@core/modules/vacancies/domain/Candidate';

const candidateStore = useCandidateStore();
const { isDragging, drag, drop } = useDraggable();

const updateCandidateOnDrop = (candidateId: string, candidateStatusId: string) => {
  const candidate = candidateStore.getCandidateById(candidateId);

  if (!candidate) return;

  const candidateDto: CandidateDTO = {
    firstName: candidate.firstName,
    lastName: candidate.lastName,
    statusId: candidateStatusId
  };

  candidateStore.updateCandidate(candidateId, candidateDto);
};
</script>

<style scoped>
.content-status-panel::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.content-status-panel::-webkit-scrollbar-track {
  background: rgb(var(--background50));
  border-radius: 1rem;
}

.content-status-panel::-webkit-scrollbar-thumb {
  background: rgb(var(--fontPrimary));
  border-radius: 1rem;
}

.content-status-panel::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--fontPrimary));
}
</style>
