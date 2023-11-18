<template>
  <header class="header">
    <div>
      <h1 class="title">
        Vinicius Inocêncio de Souza
      </h1>
      <h2 class="sub-title">{{ $t('header.title') }}</h2>
      <p class="bio">{{ $t('header.bio') }}</p>
    </div>

    <nav class="nav">
      <ul>
        <li>
          <a :class="{ 'selected': currentSection === 'about' }" href="#about">{{ $t('header.about') }}</a>
        </li>
        <li>
          <a :class="{ 'selected': currentSection === 'experience' }" href="#experience">{{ $t('header.experience') }}</a>
        </li>
        <li>
          <a :class="{ 'selected': currentSection === 'projects' }" href="#projects">{{ $t('header.projects') }}</a>
        </li>
      </ul>
    </nav>

    <ul class="social-media">
      <li>
        <a :href="githubURL" target=”_blank” rel="noopener noreferrer">
          <Icon name="uil:github" />
        </a>
      </li>
      <li>
        <a :href="linkedinURL" target=”_blank” rel="noopener noreferrer">
          <Icon name="uil:linkedin" />
        </a>
      </li>
    </ul>

    <div class="config">
      <UiLanguageSelect />
      <UiColorToggle />
    </div>
  </header>
</template>

<script lang="ts" setup>
const { $emitter } = useNuxtApp()

const githubURL = 'https://github.com/inocencio5117'
const linkedinURL = 'https://linkedin.com/in/vinicius-inocencio'

const currentSection = ref<string>("")

$emitter.on("scrollComponent", (payload) => {
  currentSection.value = String(payload) || ""
})
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  max-height: 100vh;
  position: sticky;
  top: 0;

  .sub-title {
    line-height: 1.625;
  }

  .bio {
    margin-top: 1rem;
    line-height: 1.625;
    max-width: 90%;
    min-height: 8rem;
  }

  .nav {
    ul {
      margin: 2.5rem 0;
      width: max-content;

      li {
        margin: 1rem 0;

        &>a::before {
          content: "";
          width: 2.25rem;
          margin-right: 3px;
          display: inline-block;
          border: 1px solid #919191;
          vertical-align: middle;
          transition: all 100ms linear;
        }

        &>a {
          color: #919191;
          transition: all 100ms linear;

          &:hover, &.selected {
            color: var(--text-color);

            &::before {
              width: 3rem;
              border-color: var(--text-color);
            }
          }
        }
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;

    .icon {
      width: 1.75rem;
      height: 1.75rem;
      color: var(--text-color);
    }
  }

  .config {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    gap: 2rem;
  }
}
</style>