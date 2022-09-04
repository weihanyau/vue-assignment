import { describe, expect, test } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import Card from "../Card.vue";

describe("Card", () => {
  test("Name Only", () => {
    const wrapper = mount(Card, {
      props: {
        cardInfo: {
          id: 1,
          name: "Jim",
        },
      },
    });

    expect(wrapper.find(".name").exists()).toBe(true);
    expect(wrapper.find(".gender").exists()).toBe(false);
    expect(wrapper.find(".birthdate").exists()).toBe(false);
    expect(wrapper.find(".address").exists()).toBe(false);
    wrapper.unmount();
  });

  test("Without Name", () => {
    const wrapper = mount(Card, {
      props: {
        cardInfo: {
          id: 1,
          gender: "male",
          birthdate: "1974-12-25",
          address: "532 Erewhon St PeasantVille, Rainbow, Vic 3999",
        },
      },
    });
    expect(wrapper.find(".name").text()).toBe("Name: no name");
    expect(wrapper.find(".gender").exists()).toBe(true);
    expect(wrapper.find(".birthdate").exists()).toBe(true);
    expect(wrapper.find(".address").exists()).toBe(true);
    wrapper.unmount();
  });
});
