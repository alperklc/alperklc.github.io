import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import DateTimeDisplay from "./date-time-display.js";
import useKeyboardNavigation from "./use-keyboard-navigation.js";

function Page300() {
  const displayedPageNumber = useKeyboardNavigation("300");

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
              <span class="banner-text banner-text--top">(⌐■_■)</span>
              <span class="banner-text banner-text--bottom">CONTACT</span>
            </div>
            <div class="contact-links">
              <span class="contact-link">
                <span>E-Mail:</span>
                <a class="link nostyle" href="mailto:alperkilci@gmail.com"
                  >alperkilci@gmail.com</a
                >
              </span>
              <span class="contact-link">
                <span>Twitter:</span>
                <a class="link nostyle" href="https://www.twitter.com/alperql"
                  >twitter.com/alperql</a
                >
              </span>
              <span class="contact-link">
                <span>Github:</span>
                <a class="link nostyle" href="https://github.com/alperklc/"
                  >github.com/alperklc</a
                >
              </span>
              <span class="contact-link">
                <span>LinkedIn:</span>
                <a
                  class="link nostyle"
                  href="https://www.linkedin.com/in/alper-kılcı-39a55472"
                  >linkedin.com/in/alper-kılcı-39a55472</a
                >
              </span>
              <span class="contact-link">
                <span>Xing:</span>
                <a
                  class="link nostyle"
                  href="https://www.xing.com/profile/Alper_KILCI"
                  >xing.com/profile/Alper_KILCI</a
                >
              </span>
            </div>
            <a class="link nostyle" href="/">Back to homepage: 100</a>
          </div>
        </div>
        <div class="page__footer">Click or type page number to navigate</div>
      </div>
    </div>
  `;
}
export default Page300;
