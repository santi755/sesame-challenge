<template>
  <TemplateBase>
    <template #title>Reclutamiento</template>

    <template #content>
      <StatusPanel />
    </template>
  </TemplateBase>
</template>

<script setup lang="ts">
import TemplateBase from '@/components/templates/TemplateBase.vue';
import StatusPanel from '@/components/patterns/candidate-status-panel/StatusPanel.vue';
</script>
