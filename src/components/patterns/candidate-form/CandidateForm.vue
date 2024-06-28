<template>
  <form class="grid grid-cols-2 gap-x-4 gap-y-4">
    <div class="mb-4 col-span-1">
      <InputText label="Nombre *" placeholder="Ej: Alberto" />
    </div>

    <div class="mb-4 col-span-1">
      <InputText label="Apellidos *" placeholder="Ej: López Giménez" />
    </div>

    <div class="mb-4 col-span-2">
      <SelectStandard
        label="Selecciona el estado del candidato"
        :options="candidateStatusAvailable"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from '@src/components/atoms/form/input/InputText.vue';
import SelectStandard from '@src/components/atoms/form/select/SelectStandard.vue';

const candidateStatusAvailable = [
  { value: 'available', label: 'Disponible' },
  { value: 'not-available', label: 'No disponible' },
  { value: 'interviewing', label: 'En proceso de entrevista' },
  { value: 'hired', label: 'Contratado' }
];
</script>
