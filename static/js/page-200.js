import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const Page200 = () => {
  return html`
    <div class="page">
      <div class="page__banner">
        <span class="banner-text banner-text--top">( ͡° ͜ʖ ͡°)</span>
        <span class="banner-text banner-text--bottom">BLOG</span>
      </div>
      <div class="text">
        Here I'm writing irregularly about travelling, technology and personal
        things.
      </div>
      <div class="text">
        <a class="link nostyle" href="https://alperkilci.com/blog">
          alperkilci.com/blog
        </a>
      </div>
    </div>
  `;
};

export default Page200;
