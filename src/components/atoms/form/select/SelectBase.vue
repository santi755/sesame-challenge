<template>
  <select
    class="select-base border font-light rounded-xl w-auto px-4 bg-background50 border-neutral200 focus:border-fontLink focus:outline-none placeholder-fontTertiary w-full"
  >
    <slot></slot>
  </select>
</template>

<style scoped>
.select-base {
  height: 2.125rem;
}
</style>
