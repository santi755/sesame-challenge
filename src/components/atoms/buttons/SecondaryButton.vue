<template>
  <ButtonBase class="secondary-button bg-fontLight hover:bg-fontLinkLight">
    <SmallTypography class="w-full text-fontPrimary text-center">
      <slot></slot>
    </SmallTypography>
  </ButtonBase>
</template>

<script setup lang="ts">
import ButtonBase from '@src/components/atoms/buttons/ButtonBase.vue';
import SmallTypography from '@src/components/atoms/typography/SmallTypography.vue';
</script>

<style scoped>
.secondary-button {
  box-shadow: inset 0 0 0 0.094rem rgb(var(--fontPrimary));
}
</style>
