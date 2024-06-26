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

// Testing inversify
import useCreateCandidate from '@src/composables/use-cases/CreateCandidate';

const { createCandidate } = useCreateCandidate();
createCandidate.execute();
</script>
