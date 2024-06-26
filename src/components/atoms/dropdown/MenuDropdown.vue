<template>
  <div v-for="(menuItem, index) in props.menu" :key="index">
    <DropdownButton class="py-2" @click="menuItem.showItems = !menuItem.showItems">
      <SmallTypography class="uppercase text-fontSecondary hover:text-fontPrimary">
        {{ menuItem.name }}
      </SmallTypography>
    </DropdownButton>

    <ul v-if="menuItem?.items && menuItem.showItems">
      <li>
        <SubMenuDropdown :subMenu="menuItem.items" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Menu } from '@/types/menu';

import SubMenuDropdown from '@/components/atoms/dropdown/SubMenuDropdown.vue';
import DropdownButton from '@/components/atoms/buttons/DropdownButton.vue';
import SmallTypography from '@/components/atoms/typography/SmallTypography.vue';

interface Props {
  menu: Menu[];
}

const props = defineProps<Props>();
</script>
