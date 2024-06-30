<template>
  <ButtonBase class="bg-fontPrimary hover:bg-fontLink" :class="{ disabled: props.disabled }">
    <SmallTypography class="w-full text-fontLight text-center">
      <slot></slot>
    </SmallTypography>
  </ButtonBase>
</template>

<script setup lang="ts">
import ButtonBase from '@src/components/atoms/buttons/ButtonBase.vue';
import SmallTypography from '@src/components/atoms/typography/SmallTypography.vue';

const props = defineProps<{
  disabled?: boolean;
}>();
</script>
