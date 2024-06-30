<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-neutral200 bg-opacity-70"
    @click.self="closeModal(false)"
  >
    <div class="modal-base-box relative bg-white rounded-lg shadow-lg p-6 max-w-160">
      <div class="mb-8">
        <BigBoldTypography tag="h2" class="leading-10">
          <slot name="title"></slot>
        </BigBoldTypography>
      </div>

      <slot name="content"></slot>

      <div class="flex justify-end mt-8">
        <SecondaryButton @click="closeModal(false)" class="mr-4 w-1/4">
          <slot name="button-cancel"></slot>
        </SecondaryButton>
        <PrimaryButton @click="closeModal(true)" class="mr w-1/4" :disabled="props.disableSubmit">
          <slot name="button-action"></slot>
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '@src/components/atoms/buttons/PrimaryButton.vue';
import SecondaryButton from '@src/components/atoms/buttons/SecondaryButton.vue';
import BigBoldTypography from '@src/components/atoms/typography/BigBoldTypography.vue';

const emit = defineEmits(['close']);

const props = defineProps<{
  disableSubmit: boolean;
}>();

const closeModal = (submit: boolean) => {
  emit('close', submit);
};
</script>

<style scoped>
.modal-base-box:before {
  border-radius: inherit;
  bottom: 1rem;
  content: '';
  left: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  z-index: -1;
  background: linear-gradient(9deg, #f6a8a7, #6c63ff);
  filter: blur(45px);
  opacity: var(0.75);
  transform: translateX(-50%) translateY(-50%) translateZ(0) scale(0.88);
  width: 100%;
  height: 80%;
}
</style>
