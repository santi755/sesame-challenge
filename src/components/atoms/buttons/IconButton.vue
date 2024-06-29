<template>
  <ButtonBase>
    <IconBase :icon="props.icon" :size="props.size" />
  </ButtonBase>
</template>

<script setup lang="ts">
import ButtonBase from '@src/components/atoms/buttons/ButtonBase.vue';
import IconBase from '@src/components/atoms/icons/IconBase.vue';
import type { Icon } from '@src/types/icon';

const props = defineProps<Icon>();
</script>

<style scoped>
.secondary-button {
  box-shadow: inset 0 0 0 0.094rem rgb(var(--fontPrimary));
}
</style>
