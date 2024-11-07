<template>
  <MainContainer>
    <Header />
    <ContentContainer>
      <SectionsAbout />
      <SectionsExperience />
      <SectionsProjects />
      <SectionsFooter />
    </ContentContainer>
  </MainContainer>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

useHead({
  title: t("site_title"),
  meta: [{
    name: "color-scheme",
    content: "dark light"
  }],
  htmlAttrs: { lang: locale.value },
})
</script>

<style lang="scss">
@use '~/styles/global.scss'
</style>
