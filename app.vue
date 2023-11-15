<template>
  <div>
    <HomeComponent/>
  </div>
</template>

<style lang="scss">
@use '~/styles/global.scss'
</style>

<script setup lang="ts">

useHead({
  title: 'Inocêncio\'s portifolio',
  meta: [{
    name: 'color-scheme',
    content: 'dark light'
  }],
})
</script>