<template>
  <TypographyBase v-bind="$props" class="text-base font-normal">
    <slot></slot>
  </TypographyBase>
</template>

<script setup lang="ts">
import TypographyBase from '@/components/atoms/typography/TypographyBase.vue';
</script>
