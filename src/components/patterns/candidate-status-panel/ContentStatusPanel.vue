<template>
  <div class="content-status-panel flex overflow-x-auto pb-4">
    <ColumnContent
      v-for="(status, key) in candidateStatusStore.candidateStatus"
      :status="status"
      :key="key"
    />
  </div>
</template>

<script setup lang="ts">
import ColumnContent from '@src/components/patterns/candidate-status-panel/content/ColumnContent.vue';
import { useCandidateStatusStore } from '@src/stores/candidateStatus';

const candidateStatusStore = useCandidateStatusStore();
</script>

<style scoped>
.content-status-panel::-webkit-scrollbar {
  width: 0.5rem;
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
