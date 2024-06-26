<template>
  <ButtonBase class="flex justify-between w-full items-center">
    <slot></slot>
    <IconBase icon="ChevronIcon" :size="16" class="text-fontSecondary hover:text-fontPrimary" />
  </ButtonBase>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue';
import IconBase from '@/components/atoms/icons/IconBase.vue';
</script>
