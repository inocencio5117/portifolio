<template>
  <section id="projects" aria-label="My projects">
    <ul>
      <li v-for="item in pjrData.items" class="pjt-item">
        <div v-if="!isMobile" @click="sendToLink(item.link)" class="bkg-glass"></div>
        <div class="pjt-container">
          <div class="img-container">
            <NuxtImg :src="item.image" :alt="$t(item.name)" />
          </div>
          <div class="text-container">
            <h3>
              <span :style="{ cursor: isMobile ? 'pointer' : 'default' }" @click="isMobile && sendToLink(item.link)">
                {{ $t(item.name) }}
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
  </section>
</template>

<script lang="ts" setup>
import pjr from '~/data/projects.json';

const pjrData = ref(pjr)
let isMobile = ref<boolean>(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 1040
})

const sendToLink = (url: string): void => {
  window.open(url, '_blank')
}
</script>

<style scoped lang="scss">
.pjt-item {
  position: relative;
  padding: 2rem 1rem;
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
    cursor: pointer;
  }

  .pjt-container {
    display: flex;

    .img-container {
      width: 30%;
      display: grid;
      justify-content: center;

      img {
        height: auto;
        width: 100px;
      }
    }

    .text-container {
      width: 70%;

      h3 {
        transition: all 200ms linear;

        .icon {
          transition: all 200ms linear;
        }
      }

      p {
        margin-top: 1.5rem;
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
    }
  }

  &:hover {
    .bkg-glass {
      opacity: 1;
      background-color: var(--bkg-hover-shadow);
      filter: opacity(25%);
    }

    h3 {
      color: var(--text-highlighted-color);
    }

    .icon {
      transform: translate(.2rem, -.35rem);
    }
  }

  @media (max-width: 1040px) {
    .pjt-item {
      margin: 2rem 0;
    }

    .pjt-container {
      flex-direction: column-reverse;
      align-items: center;

      .bkg-glass {
        opacity: 0;
      }

      .text-container {
        width: 100%;
      }

      .img-container {
        width: 70%;
        margin-top: 2rem;

        img {
          width: 325px;
        }
      }
    }
  }
}
</style>

