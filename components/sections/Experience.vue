<template>
  <section id="experience" aria-label="My experience">
    <ul>
      <li v-for="item in expData.items" class="exp-item">
        <div class="bkg-glass"></div>
        <div>
          <header>
            {{ $t(item.date) }}
          </header>
          <div>
            <h3 class="exp-title">
              <div>
                <a aria-label="Empty link" href=""></a>
              </div>
              <span>{{ `${$t(item.title)} — ${$t(item.company)}` }}</span>
            </h3>
            <p>{{ $t(item.description) }}</p>
            <ul class="techs-list">
              <li v-for="tech in item.techs">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="view-resume">
      <a aria-label="Link to resume" :href="resumeURL" target=”_blank” rel="noopener noreferrer">
        {{ $t('experience.resume') }}
      </a>
      <Icon name="system-uicons:arrow-right"></Icon>
    </div>
  </section>
</template>

<script lang="ts" setup>
import exp from '~/data/experience.json';

const { locale } = useI18n()
const expData = ref(exp)

const resumeURL = computed(() => {
  return locale.value === 'pt-BR'
    ? 'https://drive.google.com/file/d/1k4Ju8vEs6ib2Eg7OJWokq982cuVp-sT4/view?usp=sharing'
    : 'https://drive.google.com/file/d/1k4Ju8vEs6ib2Eg7OJWokq982cuVp-sT4/view?usp=sharing'
})

</script>

<style scoped lang="scss">
.exp-item {
  position: relative;
  padding: 2rem;
  margin: 1rem 0;

  .bkg-glass {
    opacity: 0;
    transition: all 200ms linear;
    position: absolute;
    top: -1rem;
    right: -1rem;
    bottom: -1rem;
    left: -1rem;
    height: 100%;
    width: 100%;
    margin: 1rem;
    border-radius: .5rem;
  }

  header {
    color: var(--text-color);
  }

  .exp-title,
  .icon {
    transition: all 200ms ease;
  }

  P,
  h3 {
    margin-top: .75rem;
  }

  p {
    line-height: 1.625;
  }

  .techs-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;

    li {
      display: flex;
      place-items: center;
      background-color: var(--bkg-highlighted-color);
      color: var(--text-highlighted-color);
      padding: .5rem 1rem;
      border-radius: 1rem;
    }
  }

  &:hover {
    .bkg-glass {
      opacity: 1;
      background-color: var(--bkg-hover-shadow);
      filter: opacity(25%);
    }

    .exp-title {
      color: var(--text-highlighted-color);
    }
  }
}

.view-resume {
  margin-top: 3rem;
  color: var(--text-color);
  a {
    font-weight: 600;
    padding-bottom: .5rem;
    transition: all 200ms linear;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: all 200ms linear;
  }
  &:hover {
    a {
      border-bottom: 1px solid var(--text-highlighted-color);
    }
    .icon {
      transform: translate(.5rem, 0);
    }
  }
}

@media (max-width: 1040px) {
  .exp-item {
    .bkg-glass {
      opacity: 0;
    }
  }
}
</style>

