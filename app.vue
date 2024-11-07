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
  meta: [
    {
    name: "color-scheme",
    content: "dark light",
    },
    {
      name: "description",
      content: "Portifolio de Vinicius Inocêncio de Souza",
    },
    {
      name: "keywords",
      content: "developer, fullstack, frontend, react, vue, javascript, typescript, python, c#, asp.net, sql, aws, next.js, express, docker, git, github, linkedin, vinicius inocencio, vinicius inocencio de souza, vinicius inocencio souza, inocencio, inocencio5117, inocencio5117 souza, inocencio souza, inocencio5117 de souza",
    },
  ],
  htmlAttrs: {
    lang: locale.value,
   },
})
</script>

<style lang="scss">
@use '~/styles/global.scss'
</style>
