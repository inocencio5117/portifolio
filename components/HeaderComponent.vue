<template>
    <header class="header">
        <div>
            <h1 class="title">
                Vinicius Inocêncio
            </h1>
            <h2 class="sub-title">
                Frontend Engineer
            </h2>
            <p class="bio">
                Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.
                Paisis,
                filhis, espiritis santis. Viva Forevis aptent taciti sociosqu ad litora torquent. Per aumento de cachacis,
                eu
                reclamis.
                <br>
                Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Mauris nec dolor in eros commodo tempor.
                Aenean
                aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Copo furadis é disculpa
                de
                bebadis, arcu quam euismod magna.
            </p>
        </div>

        <nav class="nav">
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>

        <ul class="social-media">
            <li>
                <Icon name="uil:github" color="#eee" />
            </li>
            <li>
                <Icon name="uil:linkedin" color="#eee" />
            </li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .sub-title {
    line-height: 1.75;
  }

  .bio {
    margin-top: 1rem;
    line-height: 1.5;
    max-width: 90%;
  }

  .nav {
    ul {
      margin-top: 4rem;
      width: max-content;

      li {
        margin: 1rem 0;

        &>a::before {
          content: "";
          width: 2rem;
          margin-right: 3px;
          display: inline-block;
          border: 1px solid #3a3a3a;
          vertical-align: middle;
          transition: all 250ms linear;
        }

        &>a {
          color: #3a3a3a;
          transition: all 250ms linear;

          &:hover {
            color: white;

            &::before {
              width: 3rem;
              border-color: white;
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
    }
  }
}
</style>