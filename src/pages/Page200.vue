<template>
  <base-page title="TELETEXT" number="200">
    <div
      class="page"
      slot="pageContent">
      <div class="page__banner">
        <span class="banner-text banner-text--top">( ͡° ͜ʖ ͡°)</span>
        <span class="banner-text banner-text--bottom">BLOG</span>
      </div>
      <div class="text">
        I wrote some posts about travelling, technology and personal things on different blogs in the past.
        Created my own blog recently, writing sometimes.
        My current blog is written in my motherlanguage, Turkish.
      </div>
      <div class="text">
        Here it is: <a class="link nostyle" href="https://blog.alperkilci.com">blog.alperkilci.com</a>
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '../components/BasePage';

export default {
  components: { BasePage },
};
</script>

<style>
.text {
  margin: 0 20px;
}
</style>
