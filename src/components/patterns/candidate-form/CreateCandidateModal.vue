<template>
  <ModalBase v-if="candidateStore.showCandidateModal" @close="closeModal">
    <template #title> Añadir candidato </template>
    <template #content>
      <CandidateForm />
    </template>
    <template #button-cancel> Cancelar </template>
    <template #button-action> Añadir </template>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from '@src/components/atoms/modal/ModalBase.vue';
import CandidateForm from '@src/components/patterns/candidate-form/CandidateForm.vue';

import { useCandidateStore } from '@src/stores/candidate';

const candidateStore = useCandidateStore();

const closeModal = (submit: boolean) => {
  if (submit) {
    console.log('submit');
  }
  candidateStore.toggleCandidateModal(false);
};
</script>
