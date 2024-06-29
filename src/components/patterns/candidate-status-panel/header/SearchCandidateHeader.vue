<template>
  <div>
    <InputText v-model="candidateStore.searchText" placeholder="Buscar" icon="SearchIcon" />
  </div>
</template>

<script setup lang="ts">
import InputText from '@src/components/atoms/form/input/InputText.vue';
import { useCandidateStore } from '@src/stores/candidate';

const candidateStore = useCandidateStore();
</script>
