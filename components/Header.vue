<template>
  <header class="header">
    <div>
      <h1 class="title">
        Vinicius Inocêncio
      </h1>
      <h2 class="sub-title">
        Frontend Engineer
      </h2>
      <p class="bio">{{ $t('header.bio') }}</p>
    </div>

    <nav class="nav">
      <ul>
        <li>
          <a href="#about">{{ $t('header.about') }}</a>
        </li>
        <li>
          <a href="#experience">{{ $t('header.experience') }}</a>
        </li>
        <li>
          <a href="#projects">{{ $t('header.projects') }}</a>
        </li>
      </ul>
    </nav>

    <ul class="social-media">
      <li>
        <Icon name="uil:github" />
      </li>
      <li>
        <Icon name="uil:linkedin" />
      </li>
    </ul>

    <div class="config">
      <UiLanguageSelect />
      <UiColorToggle />
    </div>
  </header>
</template>

<script lang="ts" setup>
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
    line-height: 1.75;
  }

  .bio {
    margin-top: 1rem;
    line-height: 1.5;
    max-width: 90%;
    min-height: 8rem;
  }

  .nav {
    ul {
      margin-top: 4rem;
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

          &:hover {
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