import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import DateTimeDisplay from "./date-time-display.js";
import useKeyboardNavigation from "./use-keyboard-navigation.js";

function Page200() {
  const displayedPageNumber = useKeyboardNavigation("200");

  return html`
    <div class="app">
      <div class="page-container">
        <div class="page-container">
          <div class="page-header">
            <span class="page-number">P${displayedPageNumber}</span>
            <span class="title">TELETEXT</span>
            <${DateTimeDisplay} />
          </div>
          <div class="page">
            <div class="page__banner">
              <span class="banner-text banner-text--top">( ͡° ͜ʖ ͡°)</span>
              <span class="banner-text banner-text--bottom">BLOG</span>
            </div>
            <div class="text">
              Here I'm posting irregularly, once I discover something new. I
              write about life, technology and personal things.
            </div>
            <div class="text">
              <a class="link nostyle" href="https://alperkilci.com/blog">
                alperkilci.com/blog
              </a>
            </div>
            <a class="link nostyle" href="/">Back to homepage: 100</a>
          </div>
        </div>
        <div class="page__footer">Click or type page number to navigate</div>
      </div>
    </div>
  `;
}
export default Page200;
