<template>
  <TabPanel class="flex flex-col mt-2 flex-grow">
    <template #options>
      <OptionsStatusPanel class="mb-4" />
    </template>
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
import OptionsStatusPanel from '@src/components/patterns/candidate-status-panel/OptionsStatusPanel.vue';
import HeaderStatusPanel from '@src/components/patterns/candidate-status-panel/HeaderStatusPanel.vue';
import ContentStatusPanel from '@src/components/patterns/candidate-status-panel/ContentStatusPanel.vue';
</script>
