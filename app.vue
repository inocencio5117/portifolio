<template>
  <MainContainer>
    <Header />
    <ContentContainer>
      <SectionsAbout/>
      <SectionsExperience/>
      <SectionsProjects/>
    </ContentContainer>
  </MainContainer>
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
