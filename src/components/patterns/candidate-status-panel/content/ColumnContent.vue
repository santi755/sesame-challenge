<template>
  <div class="flex-none border border-neutral200 rounded-xl w-64 p-4 mr-4 last:mr-0">
    <div class="block h-1 bg-slate-600 mb-2"></div>
    <div class="flex content-start items-center mb-4">
      <IconBase icon="InboxIcon" :size="24" />
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
import { computed } from 'vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';
import MediumBoldTypography from '@src/components/atoms/typography/MediumBoldTypography.vue';
import CardColumnContent from '@src/components/patterns/candidate-status-panel/content/CardColumnContent.vue';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';
import { useCandidateStore } from '@src/stores/candidate';

const props = defineProps<{
  status: CandidateStatus;
}>();

const candidateStore = useCandidateStore();
const filteredCandidates = computed(() => {
  return candidateStore.candidates.filter((candidate) => candidate.statusId === props.status.id);
});
</script>
