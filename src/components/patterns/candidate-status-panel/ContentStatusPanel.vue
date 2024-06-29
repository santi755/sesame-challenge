<template>
  <div class="flex overflow-x-auto pb-4">
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
