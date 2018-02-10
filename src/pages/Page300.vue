<template>
  <base-page title="TELETEXT" number="300">
    <div
      class="page"
      slot="pageContent">
      <div class="page__banner">
        <span class="banner-text banner-text--top">(⌐■_■)</span>
        <span class="banner-text banner-text--bottom">CONTACT</span>
      </div>
      <div></div>
      <div class="contact-links">
        <span class="contact-link">
          <span>E-Mail:</span>
          <a class="link nostyle" href="mailto:alperkilci@gmail.com">alperkilci@gmail.com</a>
        </span>
        <span class="contact-link">
          <span>Twitter:</span>
          <a class="link nostyle" href="https://www.twitter.com/alperql">twitter.com/alperql</a>
        </span>
        <span class="contact-link">
          <span>Github:</span>
          <a class="link nostyle" href="https://github.com/alperklc/">github.com/alperklc</a>
        </span>
        <span class="contact-link">
          <span>LinkedIn:</span>
          <a class="link nostyle" href="https://www.linkedin.com/in/alper-kılcı-39a55472">linkedin.com/in/alper-kılcı-39a55472</a>
        </span>
        <span class="contact-link">
          <span>Xing:</span>
          <a class="link nostyle" href="https://www.xing.com/profile/Alper_KILCI">xing.com/profile/Alper_KILCI</a>
        </span>
      </div>
      <div>
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
.contact-link {
  display: block;
  margin: 0 20px;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
</style>
