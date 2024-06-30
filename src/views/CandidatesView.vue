<template>
  <TemplateBase class="h-screen">
    <template #title>Reclutamiento</template>

    <template #content>
      <StatusPanel />
    </template>
  </TemplateBase>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import TemplateBase from '@src/components/templates/TemplateBase.vue';
import StatusPanel from '@src/components/patterns/candidate-status-panel/StatusPanel.vue';

import { useCandidateStore } from '@src/stores/candidate';
import { useCandidateStatusStore } from '@src/stores/candidateStatus';

onMounted(async () => {
  const candidateStatusStore = useCandidateStatusStore();
  candidateStatusStore.listCandidateStatus();

  const candidateStore = useCandidateStore();
  candidateStore.listCandidatesByVacancy();
});
</script>
