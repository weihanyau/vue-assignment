<script>
export default {
  //I wanted to make name required but I dont think this is possible with object
  props: ["cardInfo"],
};
</script>

<template>
  <div class="card" draggable="true">
    <p class="info name">
      Name: {{ cardInfo.name ? cardInfo.name : "no name" }}
    </p>
    <p v-if="cardInfo.gender" class="info gender">
      Gender: {{ cardInfo.gender }}
    </p>
    <p v-if="cardInfo.birthdate" class="info birthdate">
      BirthDate: {{ cardInfo.birthdate }}
    </p>
    <p v-if="cardInfo.address" class="info address">
      Address: {{ cardInfo.address }}
    </p>
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
