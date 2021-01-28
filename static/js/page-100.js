import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const Page100 = () => {
  return html`
    <div class="page">
      <div class="page__banner">
        <span class="banner-text banner-text--top">Personal website of</span>
        <span class="banner-text banner-text--bottom">ALPER KILCI</span>
      </div>
      <div class="page__info">
        <div class="text">
          Hi, I'm Alper, developing software, mostly frontend stuff. Having a
          creative outlet makes me happy. Living in Hamburg, Germany.
        </div>
      </div>
      <div class="page__links">
        <a class="link nostyle" href="#/page/200">
          <span class="link__text">Blog</span>
          <span class="link__number">200</span>
        </a>
        <a class="link nostyle" href="#/page/300">
          <span class="link__text">Contact</span>
          <span class="link__number">300</span>
        </a>
      </div>
    </div>
  `;
};

export default Page100;
