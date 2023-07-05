<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { logged } from "../store";

onMounted(() => {
  if (localStorage.getItem("accessToken")) {
    logged.value = true;
  }
});
</script>

<template>
  <h1 class="fw-bold m-3">Seja bem-vindo!</h1>
  <div
    class="mx-5 p-5 text-justify border rounded shadow"
    style="text-align: justify"
  >
    <img
      src="../assets/home.png"
      alt="Home"
      style="max-width: 500px; width: 100%"
    />

    <p class="text-center fw-bold" v-if="!logged">
      Faça o
      <RouterLink to="/login" class="text-decoration-none">login</RouterLink>
      para acessar o dashboard.
    </p>
    <p class="text-center fw-bold" v-else>
      Acesse o
      <RouterLink to="/dashboard" class="text-decoration-none"
        >dashboard</RouterLink
      >.
    </p>
  </div>
</template>
