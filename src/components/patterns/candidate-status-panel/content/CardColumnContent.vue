<template>
  <div class="border border-neutral200 rounded-xl py-2 px-3 bg-background50 my-2 cursor-pointer">
    <div class="flex content-between items-center mb-1">
      <div class="w-10/12">
        <MediumSemiboldTypography class="truncate">{{
          `${props.candidate.firstName} ${props.candidate.lastName}`
        }}</MediumSemiboldTypography>
      </div>

      <IconButton
        icon="VerticalDotsIcon"
        class="pr-0 pt-0 pb-0 w-2/12 hover:text-fontLink"
        :size="18"
        @click="candidateModalStore.toggleModal(true, 'update', props.candidate.id)"
      />
    </div>

    <ExtraSmallTypography class="leading-5 mb-1">
      Añadido por {{ vacancyStore.vacancy?.name }}
    </ExtraSmallTypography>
    <div class="flex items-center justify-start">
      <IconBase icon="ClockIcon" class="text-fontTertiary mr-1" :size="12" />
      <ExtraSmallTypography class="text-fontTertiary">
        {{ formatDate(props.candidate.updatedAt) }}
      </ExtraSmallTypography>
    </div>
  </div>
</template>

<script setup lang="ts">
import MediumSemiboldTypography from '@src/components/atoms/typography/MediumSemiboldTypography.vue';
import ExtraSmallTypography from '@src/components/atoms/typography/ExtraSmallTypography.vue';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';
import IconButton from '@src/components/atoms/buttons/IconButton.vue';
import { useCandidateModalStore } from '@src/stores/modals/candidateModal';
import { useVacancyStore } from '@src/stores/vacancy';
import useDateFormatter from '@src/composables/utilities/useDateFormatter';
import IconBase from '@src/components/atoms/icons/IconBase.vue';

const props = defineProps<{
  candidate: Candidate;
}>();

const { formatDate } = useDateFormatter();

const candidateModalStore = useCandidateModalStore();
const vacancyStore = useVacancyStore();
</script>
