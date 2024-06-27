<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import container from '@core/config/inversifyConfig';

provide('inversifyContainer', container);
</script>
