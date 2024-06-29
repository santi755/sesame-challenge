<template>
  <div class="flex-none border border-neutral200 rounded-xl w-64 p-4 mr-4 last:mr-0">
    <div class="block h-1 mb-2" :class="`bg-${props.status.color}`"></div>
    <div class="flex content-start items-center mb-4">
      <IconBase :icon="statusIcon" :class="`text-${props.status.color}`" :size="24" />
      <MediumBoldTypography class="leading-5 ml-1">{{ props.status.name }}</MediumBoldTypography>
    </div>

    <div>
      <CardColumnContent
        v-for="(candidate, key) in filteredCandidates"
        :candidate="candidate"
        :key="key"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';
import MediumBoldTypography from '@src/components/atoms/typography/MediumBoldTypography.vue';
import CardColumnContent from '@src/components/patterns/candidate-status-panel/content/CardColumnContent.vue';
import type { CandidateStatusFrontend } from '@src/types/candidateStatus';
import { useCandidateStore } from '@src/stores/candidate';
import type { IconType } from '@src/types/icon';

const props = defineProps<{
  status: CandidateStatusFrontend;
}>();

const candidateStore = useCandidateStore();

const filteredCandidates = computed(() => {
  const candidates = candidateStore.getCandidatesFiltered();
  return candidates.filter((candidate) => candidate.statusId === props.status.id);
});

const statusIcon: ComputedRef<IconType> = computed(() => {
  return props.status.icon || 'InboxIcon';
});
</script>
