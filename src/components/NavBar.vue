<script setup>
import { RouterLink, useRouter } from "vue-router";
import { logged } from "../store";
import { onMounted } from "vue";

const router = useRouter();

const logout = () => {
  logged.value = false;
  localStorage.clear();
  router.push("/");
};

onMounted(() => {
  if (localStorage.getItem("accessToken")) {
    logged.value = true;
  }
});
</script>

<template>
  <nav class="d-flex align-items-center justify-content-around w-100">
    <img src="../assets/sesatech.png" alt="Sesatech" />

    <ul class="d-flex flex-row gap-3 mb-0 list-unstyled">
      <li>
        <RouterLink to="/" class="fw-bold fs-4 text-white text-decoration-none"
          >Home</RouterLink
        >
      </li>
      <li v-if="logged">
        <RouterLink
          to="/dashboard"
          class="fw-bold fs-4 text-white text-decoration-none"
          >Dashboard</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/about"
          class="fw-bold fs-4 text-white text-decoration-none"
          >Sobre</RouterLink
        >
      </li>
      <li v-if="!logged">
        <RouterLink
          to="/login"
          class="fw-bold fs-4 text-white text-decoration-none"
          >Login</RouterLink
        >
      </li>
      <li
        v-if="logged"
        @click="logout"
        class="fw-bold fs-4 text-white text-decoration-none nav-item"
        style="cursor: pointer"
      >
        Logout
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 90px;
  background-color: #4b2c85;
}

img {
  width: 180px;
}
</style>
