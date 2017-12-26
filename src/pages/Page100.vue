<template>
  <base-page title="TELETEXT" number="100">
    <div
      class="page"
      slot="pageContent">
      <div class="page__banner">
        <span class="banner-text banner-text--top">Personal website of</span>
        <span class="banner-text banner-text--bottom">ALPER KILCI</span>
      </div>
      <div class="page__info">
        <div class="text">
          Hi, I'm Alper, developing software, mostly frontend stuff. Having a creative outlet makes me happy. Living in Paderborn, Germany.
        </div>
        <div class="image">
          <img src="http://pixelartmaker.com/art/f1dd5233ac80be4.png">
        </div>
      </div>
      <div class="page__links">
        <a class="link nostyle" href="#/page/200">
          <span class="link__text">About</span>
          <span class="link__number">200</span>
        </a>
        <a class="link nostyle" href="https://blog.alperkilci.com">
          <span class="link__text">Blog</span>
          <span class="link__number">300</span>
        </a>
        <a class="link nostyle">
          <span class="link__text">Things I do</span>
          <span class="link__number">400</span>
        </a>
      </div>
      <div class="page__footer">www.alperkilci.com</div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '../components/BasePage';

export default {
  components: { BasePage },
};
</script>

<style lang="scss">
.page {
  &__info {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    margin: 0 20px;

    .image {
      text-align: right;
      img {
        height: 60%;
        width: 60%;
      }
    }
  }

  &__links {
    margin: 0 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    align-self: end;

    .link {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 20px;

      &__number {
        text-align: right;
      }
    }
  }

  .banner-text {
    text-align: center;

    &--top {
      font-size: 0.6em;
    }

    &--bottom {
      font-size: 1.2em;
    }
  }
}
</style>
