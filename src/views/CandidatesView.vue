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
import { useCandidateStatusStore } from '@src/stores/candidateStatus';

const candidateStore = useCandidateStore();
candidateStore.listCandidatesByVacancy();

const candidateStatusStore = useCandidateStatusStore();
candidateStatusStore.listCandidateStatus();
</script>
