<template>
  <div class="border border-neutral200 rounded-xl py-2 px-3 bg-background50 my-2">
    <div class="flex content-between items-center">
      <div class="w-full">
        <MediumSemiboldTypography class="truncate">{{
          candidate.firstName
        }}</MediumSemiboldTypography>
      </div>

      <IconButton
        icon="VerticalDotsIcon"
        class="pr-0"
        :size="18"
        @click="candidateModalStore.toggleModal(true, 'update', candidate.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MediumSemiboldTypography from '@src/components/atoms/typography/MediumSemiboldTypography.vue';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';
import IconButton from '@src/components/atoms/buttons/IconButton.vue';
import { useCandidateModalStore } from '@src/stores/modals/candidateModal';

const props = defineProps<{
  candidate: Candidate;
}>();

const candidateModalStore = useCandidateModalStore();
</script>
