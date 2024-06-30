<template>
  <div
    class="flex-none border border-neutral200 rounded-xl w-64 p-4 mr-4 last:mr-0"
    :class="isDragging && 'bg-background50'"
    @dragenter.prevent
    @dragover.prevent
  >
    <div class="block h-1 mb-2" :class="`bg-${props.status.color}`"></div>
    <div class="flex content-start items-center mb-4">
      <IconBase :icon="statusIcon" :class="`text-${props.status.color}`" :size="24" />
      <MediumBoldTypography class="leading-5 ml-1">{{ props.status.name }}</MediumBoldTypography>
    </div>

    <div class="column-content-cards overflow-x-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';
import MediumBoldTypography from '@src/components/atoms/typography/MediumBoldTypography.vue';
import type { CandidateStatusFrontend } from '@src/types/candidateStatus';
import type { IconType } from '@src/types/icon';

const props = defineProps<{
  status: CandidateStatusFrontend;
  isDragging: boolean;
}>();

const statusIcon: ComputedRef<IconType> = computed(() => {
  return props.status.icon || 'InboxIcon';
});
</script>

<style scoped>
/* width */
.column-content-cards::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
.column-content-cards::-webkit-scrollbar-track {
  background: rgb(var(--background50));
  border-radius: 1rem;
}

/* Handle */
.column-content-cards::-webkit-scrollbar-thumb {
  background: rgb(var(--fontPrimary));
  border-radius: 1rem;
}

/* Handle on hover */
.column-content-cards::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--fontPrimary));
}
</style>
