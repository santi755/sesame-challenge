<template>
  <TabPanel class="mt-2">
    <template #header>
      <HeaderStatusPanel class="mb-4" />
    </template>
    <template #content>
      <ContentStatusPanel />
    </template>
  </TabPanel>
</template>

<script setup lang="ts">
import TabPanel from '@src/components/atoms/panel/TabPanel.vue';
import HeaderStatusPanel from '@src/components/patterns/candidate-status-panel/HeaderStatusPanel.vue';
import ContentStatusPanel from '@src/components/patterns/candidate-status-panel/ContentStatusPanel.vue';
</script>
