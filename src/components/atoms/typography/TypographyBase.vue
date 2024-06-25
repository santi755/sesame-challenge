<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

defineProps({
  tag: {
    type: String as PropType<TagVariants>,
    default: 'p'
  }
})
</script>
