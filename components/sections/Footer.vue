<template>
  <footer>
    <p>
      {{ $t('footer') }} <a :href="inpired_site">Brittany Chiang</a>
    </p>
  </footer>
</template>

<script lang="ts" setup>
const inpired_site = "https://brittanychiang.com/"
</script>

<style>
footer p {
  color: var(--text-gray);
  text-align: center;
  a {
    color: var(--text-color);
  }
}
</style>

