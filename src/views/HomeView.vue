<script>
export default {
  data() {
    return {
      timer: null,
      currentTime: new Date().toLocaleString(),
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.timer);
  },
};
</script>

<template>
  <div class="wrapper">
    <p>Hello this is the onboarding assignment!</p>
    <p>Current Time: {{ currentTime }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
