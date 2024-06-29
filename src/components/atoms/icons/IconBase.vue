<template>
  <component :is="iconComponent" class="icon-base" :style="iconSize" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { icons } from '@src/components/atoms/icons/icons';
import type { Icon } from '@src/types/icon';

const props = defineProps<Icon>();

const iconComponent = computed(() => {
  if (!props.icon) return null;

  return icons[props.icon] || null;
});

const iconSize = computed(() => {
  return `width: ${props.size}px; height: ${props.size}px;`;
});
</script>

<style>
.icon-base path,
.icon-base g,
.icon-base rect {
  stroke: currentColor;
}
</style>
