<template>
  <ModalBase v-if="candidateStore.showCandidateModal" @close="closeModal">
    <template #title> Añadir candidato </template>
    <template #content>
      <CandidateForm ref="candidateData" />
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
const candidateData = ref<{ candidate: CreateCandidateDTO }>();

const closeModal = (submit: boolean) => {
  if (!candidateData.value) {
    return;
  }

  if (submit) {
    candidateStore.createCandidate(candidateData.value.candidate);
  }
  candidateStore.toggleCandidateModal(false);
};
</script>
