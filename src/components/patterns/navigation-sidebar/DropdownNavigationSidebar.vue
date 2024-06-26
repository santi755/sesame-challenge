<template>
  <nav class="pt-2">
    <MenuDropdown :menu="menu" class="py-3" />
  </nav>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';

import MenuDropdown from '@/components/atoms/dropdown/MenuDropdown.vue';

const menuStore = useMenuStore();
const { menu } = menuStore;
</script>
