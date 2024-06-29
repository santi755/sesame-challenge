<template>
  <!-- TODO: Check why is not applying semibold-600 weight (same as 700) -->
  <TypographyBase v-bind="$props" class="text-base font-semibold">
    <slot></slot>
  </TypographyBase>
</template>

<script setup lang="ts">
import TypographyBase from '@src/components/atoms/typography/TypographyBase.vue';
</script>
