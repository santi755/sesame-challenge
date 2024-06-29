<template>
  <PrimaryButton @click="candidateModalStore.toggleModal(true, 'create')">
    Añadir candidato
  </PrimaryButton>

  <CreateCandidateModal />
  <UpdateCandidateModal />
</template>

<script setup lang="ts">
import PrimaryButton from '@src/components/atoms/buttons/PrimaryButton.vue';
import CreateCandidateModal from '@src/components/patterns/candidate-form/CreateCandidateModal.vue';
import UpdateCandidateModal from '@src/components/patterns/candidate-form/UpdateCandidateModal.vue';

import { useCandidateModalStore } from '@src/stores/modals/candidateModal';

const candidateModalStore = useCandidateModalStore();
</script>
