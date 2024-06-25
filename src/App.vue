<template>
  <TitleSection>Sesame Challenge</TitleSection>

  <BaseButton @click="onClick">Click me</BaseButton>
</template>

<script setup lang="ts">
import TitleSection from '@/components/patterns/section/TitleSection.vue'
import BaseButton from '@/components/atoms/buttons/BaseButton.vue'

const onClick = () => {
  alert('Hello, Vue 3 + Vite!')
}
</script>
