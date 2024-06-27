<template>
  <ModalBase
    v-if="candidateStore.showCandidateModal"
    @close="candidateStore.toggleCandidateModal(false)"
  >
    <template #title> Añadir candidato </template>
    <template #content>
      <p>el formulario</p>
    </template>
    <template #button-action> Añadir </template>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from '@src/components/atoms/modal/ModalBase.vue';

import { useCandidateStore } from '@src/stores/candidate';

const candidateStore = useCandidateStore();
</script>
