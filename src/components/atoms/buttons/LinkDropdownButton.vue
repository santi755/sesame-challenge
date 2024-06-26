<template>
  <RouterLink
    :to="to"
    class="border-l-2 flex justify-between w-full items-center"
    :class="statusClass?.button"
  >
    <component :is="statusClass?.component" class="text-left" :class="statusClass?.text">
      <slot></slot>
    </component>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SmallSemiboldTypography from '@src/components/atoms/typography/SmallSemiboldTypography.vue';
import SmallTypography from '@src/components/atoms/typography/SmallTypography.vue';

const props = defineProps<{
  to: string;
}>();

const route = useRoute();

const isActive = computed(() => route.path === props.to);

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

const statusClass = computed(() => status.get(isActive.value));
</script>
