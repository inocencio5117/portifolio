<template>
  <div class="color-toggle">
    <button @click="handleClick" aria-label="Toggle color mode">
      <Icon :class="colorMode.preference" :name="dynamicIconName" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const handleClick = () => colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'

const dynamicIconName = computed(() => colorMode.preference === 'dark' ? 'material-symbols:light-mode' : 'solar:moon-stars-linear')
</script>

<style scoped lang="scss">
.color-toggle {
  button {
    position: relative;
    width: 3.5rem;
    height: 1.7rem;
    padding: .2rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--text-color);
    color: var(--bkg-color);
    
    .icon {
      position: absolute;
      top: 50%;
      margin-top: -15%;
      transition: all 200ms linear;
      &.dark {
        left: 5%;
      }
      &.light {
        left: 60%;
      }
    }
  }
}
</style>

