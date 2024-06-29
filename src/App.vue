<template>
  <!-- Implement loading status manager -->
  <div v-if="vacancy">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useVacancyStore } from '@src/stores/vacancy';

const vacancyStore = useVacancyStore();
vacancyStore.loadVacancy();

const { vacancy } = storeToRefs(vacancyStore);
</script>
