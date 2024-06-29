<template>
  <router-view />
</template>

<script setup lang="ts">
import { useVacancyStore } from '@src/stores/vacancy';

const vacancyStore = useVacancyStore();
vacancyStore.loadVacancy();
</script>
