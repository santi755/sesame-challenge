import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCandidateModalStore = defineStore('candidateModal', () => {
  const isVisible = ref(false);
  const mode = ref<'create' | 'update'>('create');
  const candidateId = ref<string | null>(null);

  const toggleModal = (show: boolean, modeType: 'create' | 'update', id: string | null = null) => {
    isVisible.value = show;
    mode.value = modeType;
    candidateId.value = id;
  };

  return {
    isVisible,
    mode,
    candidateId,
    toggleModal
  };
});
