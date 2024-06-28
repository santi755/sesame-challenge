<template>
  <div class="flex justify-between items-center">
    <div class="w-1/4">
      <InputText v-model="candidateSearch" placeholder="Buscar" icon="SearchIcon" />
    </div>
    <PrimaryButton @click="candidateStore.toggleCandidateModal(true)">
      Añadir candidato
    </PrimaryButton>

    <CreateCandidateModal />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PrimaryButton from '@src/components/atoms/buttons/PrimaryButton.vue';
import InputText from '@src/components/atoms/form/input/InputText.vue';
import CreateCandidateModal from '@src/components/patterns/candidate-form/CreateCandidateModal.vue';

import { useCandidateStore } from '@src/stores/candidate';

const candidateStore = useCandidateStore();

const candidateSearch = ref('');
</script>
