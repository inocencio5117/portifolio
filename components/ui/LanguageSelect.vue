<template>
  <div>
    <button @click="handleClick">
      <Icon :name="dynamicIconName" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const lang = ref('en')

const handleClick = () => lang.value = lang.value === 'en' ? 'pt-br' : 'en'

const dynamicIconName = computed(() => lang.value === 'en' ? 'emojione-v1:flag-for-brazil' : 'emojione-v1:flag-for-united-states')
</script>

<style scoped lang="scss">
button {
  border: none;
  font-size: 2.5rem;
  height: fit-content;
  width: fit-content;
  background-color: transparent;
}
</style>

