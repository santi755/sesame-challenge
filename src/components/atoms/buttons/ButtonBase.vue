<template>
  <button
    class="flex justify-between items-center cursor-pointer rounded-xl py-2 px-3"
    role="button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
