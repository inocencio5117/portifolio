<template>
  <section id="projects" aria-label="My projects">
    <ul>
      <li class="pjt-item">
        <div class="bkg-glass"></div>
        <div class="pjt-container">
          <div class="img-container">
            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
              alt="mock image">
          </div>
          <div class="text-container">
            <h3>
              <a href="">
                Steam Deck
                <Icon name="system-uicons:arrow-top-right"></Icon>
              </a>
            </h3>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Negão é teu passadis, eu sou faxa pretis. Diuretics paradis num
              copo é motivis de denguis. Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois
              paga.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>

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

      p {
        margin-top: 1.5rem;
        line-height: 1.625;
      }
    }
  }

  &:hover {
    .bkg-glass {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
      filter: opacity(25%);
    }

    .icon {
      transform: translate(.2rem, -.35rem);
    }
  }
}
</style>

