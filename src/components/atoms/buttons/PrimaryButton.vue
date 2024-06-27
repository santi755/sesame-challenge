<template>
  <ButtonBase
    class="primary-button flex justify-between w-auto items-center bg-fontPrimary rounded-xl py-2 px-3 hover:bg-fontLink"
  >
    <SmallTypography class="text-fontLight">
      <slot></slot>
    </SmallTypography>
  </ButtonBase>
</template>

<script setup lang="ts">
import ButtonBase from '@src/components/atoms/buttons/ButtonBase.vue';
import SmallTypography from '@src/components/atoms/typography/SmallTypography.vue';
</script>

<style scoped>
.primary-button {
  cursor: pointer;
}
</style>
