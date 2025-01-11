<template>
  <section id="about" aria-label="About me">
    <template v-for="text in aboutTextArray" :key="text">
      <p>
        {{ text }}
      </p>
      <br />
    </template>
  </section>
</template>

<script lang="ts" setup>
  const { t } = useI18n()

  const aboutText = t('about.text')
  const aboutTextArray = aboutText.split('\n')
</script>

<style scoped lang="scss">
section p {
  line-height: 1.625;
}
</style>

