import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoggedStore = defineStore("login", () => {
  const logged = ref(false);

  function updateLogged(value) {
    logged.value = value;
  }

  return { logged, updateLogged };
});
