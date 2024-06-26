<template>
  <div
    v-for="(subMenuItem, index) in props.subMenu"
    :key="index"
    class="p-2 rounded-lg"
    :class="{ 'bg-background50': subMenuItem.showItems }"
  >
    <DropdownButton @click="subMenuItem.showItems = !subMenuItem.showItems">
      <span class="flex items-center text-fontLink">
        <IconBase :icon="subMenuItem.icon" :size="16" />
        <SmallTypography class="pl-2 capitalize text-fontLink">
          {{ subMenuItem.name }}
        </SmallTypography>
      </span>
    </DropdownButton>

    <ul v-if="subMenuItem?.items && subMenuItem.showItems" class="mt-2">
      <li>
        <SubMenuItemDropdown :items="subMenuItem.items" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { SubMenu } from '@src/types/menu';

import SubMenuItemDropdown from '@src/components/atoms/dropdown/SubMenuItemDropdown.vue';
import DropdownButton from '@src/components/atoms/buttons/DropdownButton.vue';
import SmallTypography from '@src/components/atoms/typography/SmallTypography.vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';

interface Props {
  subMenu: SubMenu[];
}

const props = defineProps<Props>();
</script>
