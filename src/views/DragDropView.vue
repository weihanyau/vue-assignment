<script>
import { storeToRefs } from "pinia";
import CardContainer from "../components/CardContainer.vue";
import { useCardsStore } from "../stores/cardState";

export default {
  setup() {
    const store = useCardsStore();
    const { cardsInfo, fetched } = storeToRefs(store);
    return {
      cardsInfo,
      fetched,
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
    if (!this.fetched) {
      fetch("https://build.fhir.org/patient-example.json")
        .then((response) => response.json())
        .then((data) => {
          this.cardsInfo = [
            [
              {
                id: 1,
                name: data.name[1].given[0],
                gender: data.gender,
              },
              {
                id: 2,
                name: data.name[1].given[0],
                birthdate: data.birthDate,
              },
            ],
            [
              {
                id: 3,
                name: data.name[1].given[0],
                address: data.address[0].text,
              },
            ],
          ];
          this.fetched = true;
        });
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <CardContainer :cardsInfo="this.cardsInfo" :index="0" id="container1" />
    <CardContainer :cardsInfo="this.cardsInfo" :index="1" id="container2" />
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
