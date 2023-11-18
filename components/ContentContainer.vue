<template>
  <main class="content-container">
    <div v-if="hasEnteredSections" class="section-mobile-title">
      <h3>
        {{ $t(`header.${currentSection}`) }}
      </h3>
    </div>
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
const { $emitter } = useNuxtApp()


let currentSection = ref<string>("")
let hasEnteredSections = ref<boolean>(false)
$emitter.on("scrollComponent", (payload: any) => {
  currentSection.value = String(payload.section)
  hasEnteredSections.value = Boolean(payload.hasEnteredSections)
})
</script>

<style lang="scss">
.content-container {
  max-height: 100%;
  overflow-y: hidden;

  &>* {
    scroll-margin-top: 3rem;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  .section-mobile-title {
    display: none;
  }

  @media (max-width: 1040px) {
    .section-mobile-title {
      display: block;
      position: fixed;
      top: 0;
      z-index: 20;
      background: var(--bkg-body-gradient);
      width: 101vw;
      padding: 1rem;
      left: -1vw;
    }
  }
}
</style>

