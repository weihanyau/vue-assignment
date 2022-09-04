<script>
import { storeToRefs } from "pinia";
import CardContainer from "../components/CardContainer.vue";
import { useCardsStore } from "../stores/cardState";

export default {
  setup() {
    const store = useCardsStore();
    const { cardsInfo } = storeToRefs(store);
    return {
      cardsInfo,
    };
  },
  components: {
    CardContainer,
  },
  data() {
    return {
      cardsInfo: null,
    };
  },
  computed: {},
  mounted() {
    this.cardsInfo = [
      [
        {
          name: "Jim",
          gender: "male",
        },
        {
          name: "Jim",
          birthdate: "1974-12-15",
        },
      ],
      [
        {
          name: "Jim",
          address: "534 Erewhon St, PleasntVille, Rainbow, Viz, 3999",
        },
      ],
    ];
  },
};
</script>

<template>
  <div class="wrapper">
    <CardContainer :cardsInfo="this.cardsInfo" :index="0" />
    <CardContainer :cardsInfo="this.cardsInfo" :index="1" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10rem;
  padding: 1rem;
}
</style>
