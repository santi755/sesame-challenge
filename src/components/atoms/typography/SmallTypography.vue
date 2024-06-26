<template>
  <TypographyBase v-bind="$props" class="text-sm font-normal text-fontPrimary">
    <slot></slot>
  </TypographyBase>
</template>

<script setup lang="ts">
import TypographyBase from '@/components/atoms/typography/TypographyBase.vue';
</script>
