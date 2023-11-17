<template>
  <div>
    <button @click="handleClick">
      <Icon :name="dynamicIconName" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()

const handleClick = () => locale.value === 'en-US' ? setLocale('pt-BR') : setLocale('en-US')

const dynamicIconName = computed(() => locale.value === 'en-US' ? 'emojione-v1:flag-for-brazil' : 'emojione-v1:flag-for-united-states')
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

