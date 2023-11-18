<template>
  <main class="content-container">
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.content-container {
  max-height: 100%;

  &>* {
    scroll-margin-top: 3rem;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  overflow-y: hidden;
}
</style>

