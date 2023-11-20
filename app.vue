<template>
  <MainContainer>
    <Header />
    <ContentContainer>
      <SectionsAbout />
      <SectionsExperience />
      <SectionsProjects />
    </ContentContainer>
  </MainContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t("site_title"),
  meta: [{
    name: "color-scheme",
    content: "dark light"
  }],
})
</script>

<style lang="scss">
@use '~/styles/global.scss'
</style>
