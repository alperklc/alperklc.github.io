<template>
  <div class="page-header">
    <span class="page-number">P{{ pageNumber }}</span>
    <span class="title">{{ title }}</span>
    <date-time-display />
  </div>
</template>

<script>
import DateTimeDisplay from './DateTimeDisplay';

export default {
  components: { DateTimeDisplay },
  props: {
    title: String,
  },
  data() {
    return {
      pageNumber: '',
    };
  },
  computed: {
    pageNumberFromPath() {
      return this.$router.currentRoute.path.split('/').pop();
    },
  },
  beforeMount() {
    this.pageNumber = this.pageNumberFromPath || 100;
  },

};
</script>

<style>
.page-header {
  display: grid;
  grid-template-columns: 10% auto 40%;
}

.page-header .datetime {
  justify-self: end;
}
</style>
