<template>
  <MainContainerComponent>
    <HeaderComponent class="child-container" />
    <ContentContainerComponent/>
  </MainContainerComponent>
</template>

<script setup lang="ts">
useHead({
  title: 'Inocêncio\'s portifolio',
  meta: [{
    name: 'color-scheme',
    content: 'dark light'
  }],
})
</script>

<style lang="scss">
@use '~/styles/global.scss'
</style>
