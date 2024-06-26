<template>
  <TemplateBase>
    <template #title>Reclutamiento</template>

    <template #content>
      <StatusPanel />
    </template>

    <ButtonBase @click="onClick">Click me</ButtonBase>
  </TemplateBase>
</template>

<script setup lang="ts">
import TemplateBase from '@/components/templates/TemplateBase.vue';
import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue';
import StatusPanel from '@/components/patterns/candidate-status-panel/StatusPanel.vue';

const onClick = () => {
  alert('Hello, Vue 3 + Vite!');
};
</script>
