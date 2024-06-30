<template>
  <SidebarBase class="bg-fontLight shadow-right py-2 px-2">
    <div class="flex items-center justify-start w-full h-12 pb-2 px-3">
      <img src="@src/assets/sesamehr-logo.svg" alt="Logo" class="h-8" />
    </div>

    <DropdownNavigationSidebar />
  </SidebarBase>
</template>

<script setup lang="ts">
import SidebarBase from '@src/components/atoms/sidebar/SidebarBase.vue';
import DropdownNavigationSidebar from '@src/components/patterns/navigation-sidebar/DropdownNavigationSidebar.vue';
</script>
