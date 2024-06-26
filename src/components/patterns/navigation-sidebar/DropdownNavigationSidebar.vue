<template>
  <nav class="pt-2">
    <MenuDropdown :menu="menu" />
  </nav>
</template>

<script setup lang="ts">
import { useMenuStore } from '@src/stores/menu';

import MenuDropdown from '@src/components/atoms/dropdown/MenuDropdown.vue';

const menuStore = useMenuStore();
const { menu } = menuStore;
</script>
