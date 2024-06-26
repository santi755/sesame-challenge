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

import { inject } from 'vue';
import { TYPES } from '@core/config/types';
import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';

const inversifyContainer = inject('inversifyContainer');

const createCandidate = inversifyContainer.get<CreateCandidate>(TYPES.CreateCandidate);
createCandidate.execute();
</script>
