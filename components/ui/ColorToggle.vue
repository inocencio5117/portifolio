<template>
  <div class="color-toggle">
    <button @click="handleClick" aria-label="Toggle color mode">
      <Icon :class="colorMode.value" :name="dynamicIconName" :key="colorMode.preference" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const handleClick = () => colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'

const dynamicIconName = computed(() => {
  switch (colorMode.value) {
    case 'dark':
      return 'material-symbols:light-mode'
    case 'light':
      return 'solar:moon-stars-linear'
    case 'system':
      return 'material-symbols-light:settings-rounded'
    default:
      return 'material-symbols:light-mode'
  }
})

console.log(dynamicIconName.value, colorMode.value)
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
      &.dark, &.system {
        left: 5%;
      }
      &.light {
        left: 60%;
      }
    }
  }
}
</style>

