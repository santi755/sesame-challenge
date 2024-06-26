<template>
  <ButtonBase
    class="border-l-2 flex justify-between w-full items-center"
    :class="statusClass?.button"
  >
    <component :is="statusClass?.component" class="text-left" :class="statusClass?.text">
      <slot></slot>
    </component>
    <IconBase icon="ChevronIcon" :size="16" class="text-fontSecondary hover:text-fontPrimary" />
  </ButtonBase>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ButtonBase from '@/components/atoms/buttons/ButtonBase.vue';
import SmallSemiboldTypography from '@/components/atoms/typography/SmallSemiboldTypography.vue';
import SmallTypography from '@/components/atoms/typography/SmallTypography.vue';

const props = defineProps<{
  active: boolean;
}>();

const status = new Map([
  [
    true,
    {
      component: SmallSemiboldTypography,
      text: 'text-fontLink',
      button: 'border-l-fontLink'
    }
  ],
  [
    false,
    {
      component: SmallTypography,
      text: 'text-fontPrimary',
      button: 'border-l-fontLinkLight'
    }
  ]
]);

const statusClass = computed(() => status.get(props.active));
</script>
