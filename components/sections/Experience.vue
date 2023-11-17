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
                <a href=""></a>
              </div>
              <span>
                {{ $t(item.title) }}
                <Icon name="system-uicons:arrow-top-right"></Icon>
              </span>
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
      <a href="">
        View Full resumé 
      </a>
      <Icon name="system-uicons:arrow-right"></Icon>
    </div>
  </section>
</template>

<script lang="ts" setup>
import exp from '~/data/experience.json'

const expData = ref(exp)
</script>

<style scoped lang="scss">
.exp-item {
  position: relative;
  padding: 1rem;
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

  .exp-title,
  .icon {
    transition: all 200ms ease;
  }

  P,
  h3 {
    margin-top: .75rem;
  }

  p {
    line-height: 1.5;
  }

  .techs-list {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    li {
      background-color: var(--bkg-highlighted-color);
      color: var(--text-highlighted-color);
      padding: .35rem .65rem;
      border-radius: 1rem;
    }
  }

  &:hover {
    .bkg-glass {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
      filter: opacity(25%);
    }

    .exp-title {
      color: aqua;

      .icon {
        transform: translate(.2rem, -.35rem);
      }
    }
  }
}

.view-resume {
  margin-top: 3rem;
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
</style>

