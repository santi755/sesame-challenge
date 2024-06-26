<template>
  <div class="bg-neutral100">
    <div class="container mx-auto flex h-screen border-r border-neutral200 bg-background50">
      <NavigationSidebar class="w-1/5"></NavigationSidebar>

      <div class="flex-1 px-6 py-2">
        <MainHeader>
          <slot name="title"></slot>
        </MainHeader>

        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationSidebar from '@src/components/patterns/navigation-sidebar/NavigationSidebar.vue';
import MainHeader from '@src/components/patterns/main-header/MainHeader.vue';
</script>
