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

onMounted(() => {
  const { $emitter } = useNuxtApp()

  const createEventObj = (section: string, firstSectionHeight: number, currentHeight: number) => {
    return { section, hasEnteredSections: ((currentHeight * 0.5) <= firstSectionHeight) }
  }

  const about = ref<number | undefined>(document.getElementById('about')?.offsetHeight || 0)
  const exp = ref<number | undefined>(document.getElementById('experience')?.offsetHeight || 0)
  const projs = ref<number | undefined>(document.getElementById('projects')?.offsetHeight || 0)

  watch(scrollTop, (crr) => {
    if (crr <= Number(about?.value)) $emitter.emit('scrollComponent', createEventObj('about', crr, Number(about?.value)))
    else if (crr <= Number(exp?.value)) $emitter.emit('scrollComponent', createEventObj('experience', crr, Number(about?.value)))
    else if (crr >= Number(projs?.value)) $emitter.emit('scrollComponent', createEventObj('projects', crr, Number(about?.value)))
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

@media (max-width: 1040px) {
  .main-container {
    flex-direction: column;
    padding: 0 2rem;
    &>* {
      width: 100%;
      padding: 2rem 0;
    }
  }
  
}
</style>

