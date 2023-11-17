<template>
  <section id="experience" aria-label="My experience">
    <ul>
      <li class="exp-item">
        <div class="bkg-glass"></div>
        <div>
          <header>
            2018 - PRESENT
          </header>
          <div>
            <h3 class="exp-title">
              <div>
                <a href=""></a>
              </div>
              <span>
                Lead Engineer -> Upstatement
                <Icon name="system-uicons:arrow-top-right"></Icon>
              </span>
            </h3>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interagi no
              mé, cursus quis, vehicula ac nisi. Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec leo
              commodo, ut interdum diam laoreet. Sed non consequat odio.
              Nullam volutpat risus nec leo
              commodo, ut interdum diam laoreet. Sed non consequat odio.
            </p>
            <ul class="techs-list">
              <li>React</li>
              <li>Redux</li>
              <li>Vite</li>
              <li>React-query</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="exp-item">
        <div class="bkg-glass"></div>
        <div>
          <header>
            2022 - 2026
          </header>
          <div>
            <h3 class="exp-title">
              <div>
                <a href=""></a>
              </div>
              <span>
                President -> Nicaragua
                <Icon name="system-uicons:arrow-top-right"></Icon>
              </span>
            </h3>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
              Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss, é um leite divinis, qui tem
              lupuliz, matis, aguis e fermentis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              <br>
              Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide
              electram sadipscing et per. Aenean aliquam molestie leo, vitae iaculis nisl. A ordem dos tratores não altera
              o pão duris.
            </p>
            <ul class="techs-list">
              <li>React</li>
              <li>Redux</li>
              <li>Vite</li>
              <li>React-query</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="exp-item">
        <div class="bkg-glass"></div>
        <div>
          <header>
            2014 - 2019
          </header>
          <div>
            <h3 class="exp-title">
              <div>
                <a href=""></a>
              </div>
              <span>
                Master Chief - Interstellar
                <Icon name="system-uicons:arrow-top-right"></Icon>
              </span>
            </h3>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
              Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss, é um leite divinis, qui tem
              lupuliz, matis, aguis e fermentis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              <br>
              Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide
              electram sadipscing et per. Aenean aliquam molestie leo, vitae iaculis nisl. A ordem dos tratores não altera
              o pão duris.
            </p>
            <ul class="techs-list">
              <li>React</li>
              <li>Redux</li>
              <li>Vite</li>
              <li>React-query</li>
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
      background-color: #00ffff38;
      color: #00ffff;
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
      border-bottom: 1px solid #00ffff;
    }
    .icon {
      transform: translate(.5rem, 0);
    }
  }
}
</style>

