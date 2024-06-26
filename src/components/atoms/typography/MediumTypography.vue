<template>
  <component :is="tag" class="text-base font-normal">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'>,
    default: 'p'
  }
})
</script>
