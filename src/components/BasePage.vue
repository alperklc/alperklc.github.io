<template>
  <div class="page-container">
    <page-header
      :title="title"
      :number="numberToNavigate"
    />
    <slot name="pageContent" />
  </div>
</template>

<script>
import debounce from 'debounce';
import PageHeader from './PageHeader';

const VALID_PAGES = ['100', '200', '400'];
const NAVIGATION_TIMEOUT = 1000;

export default {
  components: { PageHeader },
  props: {
    title: String,
    number: String,
  },
  data() {
    return {
      numberToNavigate: '',
      typingPageNumber: false,
    };
  },
  watch: {
    numberToNavigate: debounce(function () {
      if (this.numberToNavigate !== this.number) {
        this.navigatePage(this.numberToNavigate);
      }
    }, NAVIGATION_TIMEOUT),
  },
  methods: {
    navigatePage(numberToNavigate) {
      this.typingPageNumber = false;

      if (this.isPageValid(numberToNavigate)) {
        this.$router.push({ path: numberToNavigate });
      } else {
        this.numberToNavigate = this.number;
      }
    },
    isPageValid(numberToNavigate) {
      return !!VALID_PAGES.find(page => page === numberToNavigate);
    },
    isNumeric(keyCode) {
      return keyCode >= 48 && keyCode <= 57;
    },
    handleKeydown(e) {
      if (this.isNumeric(e.keyCode)) {
        if (this.typingPageNumber) {
          this.numberToNavigate = this.numberToNavigate.concat(e.key);
        } else {
          this.numberToNavigate = e.key;
          this.typingPageNumber = true;
        }
      }
    },
  },
  mounted() {
    this.numberToNavigate = this.number;
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
};
</script>

<style>

.page-container {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 5px;
  height: 0;
  padding-bottom: 75%;
}

</style>
