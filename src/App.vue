<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav id="navbar">
    <RouterLink to="/" class="homeBtn">Home</RouterLink>
    <RouterLink to="/dragDrop" class="dragDropBtn">Drag & Drop</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
#navbar {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 2rem;
}
</style>
