<template>
  <div class="bg-neutral100">
    <div class="container mx-auto px-4 flex h-screen border-r border-neutral200">
      <div class="w-1/5 bg-fontLight shadow-md"></div>

      <div class="flex-1 p-4">
        <TitleSection>
          <slot name="title"></slot>
        </TitleSection>

        <div class="shadow-md bg-fontLight rounded-3xl">
          asd
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleSection from '@/components/patterns/section/TitleSection.vue'
</script>
