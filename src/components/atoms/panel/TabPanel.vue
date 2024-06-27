<template>
  <PanelBase class="pr-4 pb-4 pl-4">
    <slot name="options"></slot>
    <slot name="header"></slot>
  </PanelBase>
</template>

<script setup lang="ts">
import PanelBase from '@src/components/atoms/panel/PanelBase.vue';
</script>
