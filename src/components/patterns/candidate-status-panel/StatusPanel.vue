<template>
  <TabPanel class="mt-2">
    <template #header>
      <HeaderStatusPanel />
    </template>
  </TabPanel>
</template>

<script setup lang="ts">
import TabPanel from '@src/components/atoms/panel/TabPanel.vue';
import HeaderStatusPanel from '@src/components/patterns/candidate-status-panel/HeaderStatusPanel.vue';
</script>
