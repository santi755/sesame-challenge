<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-neutral200 bg-opacity-70"
    @click.self="closeModal"
  >
    <div class="modal-base-box relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <BigBoldTypography tag="h2" class="leading-10">
        <slot name="title"></slot>
      </BigBoldTypography>

      <slot name="content"></slot>

      <div class="flex justify-end">
        <PrimaryButton @click="closeModal">
          <slot name="button-action"></slot>
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '@src/components/atoms/buttons/PrimaryButton.vue';
import BigBoldTypography from '@src/components/atoms/typography/BigBoldTypography.vue';

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
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
