import { defineStore } from "pinia";

export const useCardsStore = defineStore("cardState", {
  state: () => ({ cardsInfo: [[], []] }),
});
