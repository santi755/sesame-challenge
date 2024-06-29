<template>
  <div class="w-full">
    <label class="block text-sm font-medium text-fontPrimary">
      <ExtraSmallTypography v-if="props.label" tag="span" class="block capitalize mb-2">
        {{ props.label }}
      </ExtraSmallTypography>
      <div class="relative inline-flex items-center w-full">
        <template v-if="props.icon">
          <IconBase
            :icon="icon"
            :size="16"
            class="inline-block absolute left-0 ml-3 text-fontTertiary"
          />
        </template>
        <InputBase
          :value="props.modelValue"
          @input="handleInput"
          :placeholder="placeholder"
          :class="{ 'px-8': props.icon }"
          class="text-sm"
        />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import InputBase from '@src/components/atoms/form/input/InputBase.vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';
import ExtraSmallTypography from '@src/components/atoms/typography/ExtraSmallTypography.vue';
import useModelValue from '@src/composables/useModelValue';
import type { InputText } from '@src/types/form';

//TODO: Implement required prop to validate input
const props = defineProps<InputText>();
const emit = defineEmits(['update:modelValue']);

const { handleInput } = useModelValue(props, emit);
</script>
