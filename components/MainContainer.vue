<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
let scrollTop = ref<number>(0)
const handleScroll = () => {
  scrollTop.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

nextTick(() => {
  const { $emitter } = useNuxtApp()

  const about = ref<number | undefined>(document.getElementById('about')?.offsetHeight || 0)
  const exp = ref<number | undefined>(document.getElementById('experience')?.offsetHeight || 0)
  const projs = ref<number | undefined>(document.getElementById('projects')?.offsetHeight || 0)

  watch(scrollTop, (crr) => {
    if (crr <= Number(about?.value)) $emitter.emit('scrollComponent', 'about')
    else if (crr <= Number(exp?.value)) $emitter.emit('scrollComponent', 'experience')
    else if (crr >= Number(projs?.value)) $emitter.emit('scrollComponent', 'projects')
  })
})
</script>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 6rem;

  &>* {
    width: 50%;
    padding: 6rem 0;
  }
}
</style>

