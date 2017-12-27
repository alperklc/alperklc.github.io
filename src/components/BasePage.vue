<template>
  <div class="page-container">
    <page-header
      :title="title"
      :initialPageNumber="number"
    />
    <slot name="pageContent" />
  </div>
</template>

<script>
import PageHeader from './PageHeader';

export default {
  components: { PageHeader },
  props: {
    title: String,
    number: String,
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
