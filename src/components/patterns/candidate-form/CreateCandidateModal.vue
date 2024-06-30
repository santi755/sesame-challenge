<template>
  <ModalBase v-if="isVisible" @close="closeModal" :disableSubmit="disableSubmit">
    <template #title> Añadir candidato </template>
    <template #content>
      <CandidateForm ref="candidateData" :candidate="candidateInitialData" />
    </template>
    <template #button-cancel> Cancelar </template>
    <template #button-action> Añadir </template>
  </ModalBase>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ModalBase from '@src/components/atoms/modal/ModalBase.vue';
import CandidateForm from '@src/components/patterns/candidate-form/CandidateForm.vue';
import { useCandidateModalStore } from '@src/stores/modals/candidateModal';
import { useCandidateStore } from '@src/stores/candidate';
import type { CandidateFormType } from '@src/types/candidate';

const candidateModalStore = useCandidateModalStore();
const candidateStore = useCandidateStore();
const candidateData = ref<{ candidate: CandidateFormType }>();

const candidateInitialData: CandidateFormType = {
  firstName: '',
  lastName: '',
  statusId: ''
};

const closeModal = (submit: boolean) => {
  if (!candidateData.value) {
    return;
  }

  if (submit) {
    candidateStore.createCandidate(candidateData.value.candidate);
  }
  candidateModalStore.toggleModal(false, 'create');
};

const isVisible = computed(
  () => candidateModalStore.isVisible && candidateModalStore.mode === 'create'
);

const disableSubmit = computed(() => {
  if (!candidateData.value) {
    return true;
  }

  const { firstName, lastName, statusId } = candidateData.value.candidate;
  return !firstName || !lastName || !statusId;
});
</script>
