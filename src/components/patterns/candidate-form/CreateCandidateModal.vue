<template>
  <ModalBase v-if="candidateStore.showCandidateModal" @close="closeModal">
    <template #title> Añadir candidato </template>
    <template #content>
      <CandidateForm ref="candidateForm" />
    </template>
    <template #button-cancel> Cancelar </template>
    <template #button-action> Añadir </template>
  </ModalBase>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalBase from '@src/components/atoms/modal/ModalBase.vue';
import CandidateForm from '@src/components/patterns/candidate-form/CandidateForm.vue';
import type { CreateCandidateDTO } from '@core/modules/vacancies/domain/Candidate';
import { useCandidateStore } from '@src/stores/candidate';

const candidateStore = useCandidateStore();
const candidateForm = ref<CreateCandidateDTO>();

const closeModal = (submit: boolean) => {
  if (!candidateForm.value) {
    return;
  }

  if (submit) {
    candidateStore.createCandidate(candidateForm.value);
  }
  candidateStore.toggleCandidateModal(false);
};
</script>
