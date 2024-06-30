<template>
  <!-- TODO: Make this component dynamic -->
  <div class="flex px-6 justify-start border-b border-neutral200 leading-10">
    <button class="mr-8">
      <MediumBoldTypography class="option-selected text-fontLink">Vacantes</MediumBoldTypography>
    </button>
    <button>
      <MediumTypography class="text-neutral200">Candidatos</MediumTypography>
    </button>
  </div>
</template>

<script setup lang="ts">
import MediumBoldTypography from '@src/components/atoms/typography/MediumBoldTypography.vue';
import MediumTypography from '@src/components/atoms/typography/MediumTypography.vue';
</script>

<style>
.option-selected {
  position: relative;
}

.option-selected::after {
  content: '';
  position: absolute;
  bottom: -0.063rem;
  left: 0;
  width: 100%;
  height: 0.125rem;
  border-radius: 0.125rem 0.125rem 0 0;
  background-color: rgba(var(--fontLink));
}
</style>
