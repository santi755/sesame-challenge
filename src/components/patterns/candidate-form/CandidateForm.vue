<template>
  <form class="grid grid-cols-2 gap-x-4 gap-y-4">
    <div class="mb-4 col-span-1">
      <InputText v-model="candidate.firstName" label="Nombre *" placeholder="Ej: Alberto" />
    </div>

    <div class="mb-4 col-span-1">
      <InputText v-model="candidate.lastName" label="Apellidos *" placeholder="Ej: López Giménez" />
    </div>

    <div class="mb-4 col-span-2">
      <SelectStandard
        v-model="candidate.statusId"
        label="Selecciona el estado del candidato"
        :options="candidateStatusOptions"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from '@src/components/atoms/form/input/InputText.vue';
import SelectStandard from '@src/components/atoms/form/select/SelectStandard.vue';
import { useCandidateStatusStore } from '@src/stores/candidateStatus';
import type { CreateCandidateDTO } from '@core/modules/vacancies/domain/Candidate';

const candidateStatusStore = useCandidateStatusStore();
const { candidateStatus } = candidateStatusStore;
const candidateStatusOptions = candidateStatus.map((status) => ({
  value: status.id,
  label: status.name
}));

const candidate = ref<CreateCandidateDTO>({
  firstName: '',
  lastName: '',
  statusId: ''
});

defineExpose({
  candidate
});
</script>
