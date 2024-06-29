<template>
  <div class="flex justify-between items-center">
    <SearchCandidateHeader class="w-1/4" />
    <AddCandidateHeader />
  </div>
</template>

<script setup lang="ts">
import SearchCandidateHeader from '@src/components/patterns/candidate-status-panel/header/SearchCandidateHeader.vue';
import AddCandidateHeader from '@src/components/patterns/candidate-status-panel/header/AddCandidateHeader.vue';
</script>
