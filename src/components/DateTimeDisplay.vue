<template>
  <span class="datetime">
    <span class="date">{{dateString}}</span>
    <span class="time">{{timeString}}</span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date(),
    };
  },
  methods: {
    updateTime() {
      this.currentTime = new Date();
    },
  },
  computed: {
    dateString() {
      return `${this.currentTime.toDateString().toUpperCase().slice(0, -5)}`;
    },
    timeString() {
      return `${this.currentTime.toLocaleTimeString()}`;
    },
  },
  beforeMount() {
    setInterval(this.updateTime, 1000);
  },
};
</script>
