<template>
  <TemplateBase>
    <template #title>Reclutamiento</template>

    <template #content>
      <StatusPanel />
    </template>
  </TemplateBase>
</template>

<script setup lang="ts">
import TemplateBase from '@src/components/templates/TemplateBase.vue';
import StatusPanel from '@src/components/patterns/candidate-status-panel/StatusPanel.vue';

import { useCandidateStore } from '@src/stores/candidate';

const candidateStore = useCandidateStore();
candidateStore.listCandidatesByVacancy();
</script>
