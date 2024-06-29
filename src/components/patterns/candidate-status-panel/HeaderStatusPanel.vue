<template>
  <div class="flex justify-between items-center">
    <div class="w-1/4">
      <InputText v-model="candidateSearch" placeholder="Buscar" icon="SearchIcon" />
    </div>
    <PrimaryButton @click="candidateModalStore.toggleModal(true, 'create')">
      Añadir candidato
    </PrimaryButton>

    <CreateCandidateModal />
    <UpdateCandidateModal />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PrimaryButton from '@src/components/atoms/buttons/PrimaryButton.vue';
import InputText from '@src/components/atoms/form/input/InputText.vue';
import CreateCandidateModal from '@src/components/patterns/candidate-form/CreateCandidateModal.vue';
import UpdateCandidateModal from '@src/components/patterns/candidate-form/UpdateCandidateModal.vue';

import { useCandidateModalStore } from '@src/stores/modals/candidateModal';

const candidateModalStore = useCandidateModalStore();

// TODO: Implement search functionality in store
const candidateSearch = ref('');
</script>
