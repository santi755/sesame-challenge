<template>
  <ModalBase v-if="isVisible" @close="closeModal">
    <template #title> Actualizar candidato </template>
    <template #content>
      <CandidateForm ref="candidateData" :candidate="candidateSelected" />
    </template>
    <template #button-cancel> Cancelar </template>
    <template #button-action> Actualizar </template>
  </ModalBase>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue';
import ModalBase from '@src/components/atoms/modal/ModalBase.vue';
import CandidateForm from '@src/components/patterns/candidate-form/CandidateForm.vue';
import type { CandidateFormType } from '@src/types/candidate';
import { useCandidateModalStore } from '@src/stores/modals/candidateModal';
import { useCandidateStore } from '@src/stores/candidate';

const candidateModalStore = useCandidateModalStore();
const candidateStore = useCandidateStore();
const candidateData = ref<{ candidate: CandidateFormType }>();

const closeModal = (submit: boolean) => {
  if (submit) {
    submitUpdate();
  }
  candidateModalStore.toggleModal(false, 'update');
};

const submitUpdate = () => {
  if (candidateModalStore.candidateId === null) {
    throw new Error('Candidate ID is not set');
  }

  if (!candidateData.value) {
    throw new Error('Candidate data is not set');
  }

  candidateStore.updateCandidate(candidateModalStore.candidateId, candidateData.value.candidate);
};

const isVisible = computed(
  () => candidateModalStore.isVisible && candidateModalStore.mode === 'update'
);

const candidateSelected: ComputedRef<CandidateFormType> = computed((): CandidateFormType => {
  const candidate = candidateStore.candidates.find(
    (candidate) => candidate.id === candidateModalStore.candidateId
  );

  return {
    firstName: candidate?.firstName || '',
    lastName: candidate?.lastName || '',
    statusId: candidate?.statusId || ''
  };
});
</script>
