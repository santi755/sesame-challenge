<template>
  <div class="w-full">
    <label class="block text-sm font-medium text-fontPrimary">
      <ExtraSmallTypography v-if="props.label" tag="span" class="block mb-2">
        {{ props.label }}
      </ExtraSmallTypography>

      <div class="relative inline-flex items-center w-full">
        <SelectBase class="appearance-none" :value="props.modelValue" @input="handleInput">
          <option
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
            class="text-fontPrimary"
          >
            {{ option.label }}
          </option>
        </SelectBase>
        <IconBase
          icon="ChevronIcon"
          :size="22"
          class="select-standard-chevron inline-block absolute right-3 ml-3 text-fontTertiary"
        />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import SelectBase from '@src/components/atoms/form/select/SelectBase.vue';
import ExtraSmallTypography from '@src/components/atoms/typography/ExtraSmallTypography.vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';
import useModelValue from '@src/composables/useModelValue';
import type { SelectStandard } from '@src/types/form';

const props = defineProps<SelectStandard>();

const emit = defineEmits(['update:modelValue']);

const { handleInput } = useModelValue(props, emit);
</script>

<style scoped>
.select-standard-chevron {
  transform: rotate(180deg);
}
</style>
