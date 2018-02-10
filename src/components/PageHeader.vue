<template>
  <div class="page-header">
    <span class="page-number">P{{ pageNumber || initialPageNumber }}</span>
    <span class="title">{{ title }}</span>
    <date-time-display />
  </div>
</template>

<script>
import debounce from 'debounce';
import DateTimeDisplay from './DateTimeDisplay';

const VALID_PAGES = ['100', '200', '300'];
const NAVIGATION_TIMEOUT = 1000;

export default {
  components: { DateTimeDisplay },
  props: {
    title: String,
    initialPageNumber: String,
  },
  data() {
    return {
      pageNumber: '',
      typingPageNumber: false,
    };
  },
  watch: {
    pageNumber: debounce(function () {
      if (this.pageNumber !== this.initialPageNumber) {
        this.navigatePage(this.pageNumber);
      }
    }, NAVIGATION_TIMEOUT),
  },
  methods: {
    navigatePage(pageNumber) {
      this.typingPageNumber = false;

      if (this.isPageValid(pageNumber)) {
        this.$router.push({ path: pageNumber });
      } else {
        this.pageNumber = this.initialPageNumber;
      }
    },
    isPageValid(pageNumber) {
      return !!VALID_PAGES.find(page => page === pageNumber);
    },
    isNumeric(keyCode) {
      return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
    },
    handleKeydown(e) {
      if (this.isNumeric(e.keyCode)) {
        if (this.typingPageNumber) {
          this.pageNumber = this.pageNumber.concat(e.key);
        } else {
          this.pageNumber = e.key;
          this.typingPageNumber = true;
        }
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
};
</script>

<style>
.page-header {
  display: grid;
  grid-template-columns: 10% auto 60%;
}

.page-header .datetime {
  justify-self: end;
}
</style>
