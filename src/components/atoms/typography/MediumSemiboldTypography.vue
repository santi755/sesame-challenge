<template>
  <TypographyBase v-bind="$props" class="text-base font-semibold">
    <slot></slot>
  </TypographyBase>
</template>

<script setup lang="ts">
import TypographyBase from '@src/components/atoms/typography/TypographyBase.vue';
</script>
