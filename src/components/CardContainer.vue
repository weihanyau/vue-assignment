<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: ["cardsInfo", "index"],
  methods: {
    onDrag(event, cardIndex) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("cardIndex", cardIndex);
      event.dataTransfer.setData("from", this.index);
    },
    onDrop(event) {
      const cardIndex = event.dataTransfer.getData("cardIndex");
      const from = event.dataTransfer.getData("from");
      const card = this.cardsInfo[from][cardIndex];
      this.cardsInfo[from].splice(cardIndex, 1);
      this.cardsInfo[this.index].push(card);
    },
  },
};
</script>

<template>
  <div
    class="container"
    @dragover.prevent
    @dragenter.prevent
    @drop="onDrop($event)"
  >
    <Card
      v-for="(info, cardIndex) in cardsInfo[index]"
      @dragstart="onDrag($event, cardIndex)"
      :cardInfo="info"
      :key="info.id"
      :id="`card${info.id}`"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  height: 30rem;
  width: 20rem;
  background-color: black;
}
</style>
