<template>
  <PanelBase class="p-4">
    <slot name="options"></slot>
    <slot name="header"></slot>
    <slot name="content"></slot>
  </PanelBase>
</template>

<script setup lang="ts">
import PanelBase from '@src/components/atoms/panel/PanelBase.vue';
</script>
