<script>
export default {
  props: ["cardInfo"],
};
</script>

<template>
  <div class="card" draggable="true">
    <p v-if="cardInfo.name" class="info">Name: {{ cardInfo.name }}</p>
    <p v-if="cardInfo.gender" class="info">Gender: {{ cardInfo.gender }}</p>
    <p v-if="cardInfo.birthdate" class="info">
      BirthDate:{{ cardInfo.birthdate }}
    </p>
    <p v-if="cardInfo.address" class="info">Address: {{ cardInfo.address }}</p>
  </div>
</template>

<style scoped>
.card {
  height: 6rem;
  width: 16rem;
  background-color: white;
}

.info {
  user-select: none;
}
</style>
