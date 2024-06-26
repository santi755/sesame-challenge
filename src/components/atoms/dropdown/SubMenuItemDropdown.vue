<template>
  <LinkDropdownButton
    :to="item.to"
    v-for="(item, index) in props.items"
    :key="index"
    class="sub-menu-item w-full leading-9"
  >
    {{ item.name }}
  </LinkDropdownButton>
</template>

<script setup lang="ts">
import type { SubMenuItem } from '@src/types/menu';

import LinkDropdownButton from '@src/components/atoms/buttons/LinkDropdownButton.vue';

interface Props {
  items: SubMenuItem[] | undefined;
}

const props = defineProps<Props>();
</script>

<style scoped>
.sub-menu-item {
  margin-left: 0.45rem;
  padding-left: 0.95rem;
}
</style>
