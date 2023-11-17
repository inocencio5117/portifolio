<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.main-container {
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 6rem;
}

.child-container {
  width: 50%;
  padding: 6rem 0;
}
</style>

