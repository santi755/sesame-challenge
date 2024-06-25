<template>
  <component :is="tag" class="text-base font-semibold">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
// TODO: Type 'tag' prop properly
defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'>,
    default: 'p'
  }
})
</script>
