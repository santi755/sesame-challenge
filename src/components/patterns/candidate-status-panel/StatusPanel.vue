<template>
  <TabPanel class="flex flex-col mt-2 flex-grow">
    <template #header>
      <HeaderStatusPanel class="mb-4" />
    </template>
    <template #content>
      <ContentStatusPanel class="flex-grow" />
    </template>
  </TabPanel>
</template>

<script setup lang="ts">
import TabPanel from '@src/components/atoms/panel/TabPanel.vue';
import HeaderStatusPanel from '@src/components/patterns/candidate-status-panel/HeaderStatusPanel.vue';
import ContentStatusPanel from '@src/components/patterns/candidate-status-panel/ContentStatusPanel.vue';
</script>
