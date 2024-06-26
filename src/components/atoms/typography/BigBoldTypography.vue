<template>
  <TypographyBase v-bind="$props" class="text-2xl font-bold text-fontPrimary">
    <slot></slot>
  </TypographyBase>
</template>

<script setup lang="ts">
import TypographyBase from '@/components/atoms/typography/TypographyBase.vue';
</script>
