<template>
  <div>
    <div class="page-container">
      <page-header
        :title="title"
        :initialPageNumber="number"
      />
      <slot name="pageContent" />
    </div>
    <div class="page__footer">
      Click or type page number to navigate
    </div>
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
