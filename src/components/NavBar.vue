<script setup>
import { RouterLink, useRouter } from "vue-router";
import { onMounted } from "vue";
import { useLoggedStore } from "../stores/LoginStore";
import { storeToRefs } from "pinia";

const router = useRouter();

const store = useLoggedStore();

const { logged } = storeToRefs(store);
const { updateLogged } = store;

const logout = () => {
  updateLogged(false);
  localStorage.clear();
  router.push("/");
};

onMounted(() => {
  if (localStorage.getItem("accessToken")) {
    updateLogged(true);
  }
});
</script>

<template>
  <nav
    class="navbar navbar-expand-md sticky-top p-4 w-100"
    style="background-color: #4b2c85"
  >
    <div class="container-fluid gap-3">
      <img src="../assets/sesatech.png" alt="SesaTech" style="width: 180px" />
      <div
        class="navbar-toggler p-1 border-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="../assets/menu.svg" alt="Menu" style="width: 40px" />
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li>
            <RouterLink
              to="/"
              class="fw-bold fs-4 text-white text-decoration-none nav-item"
              >Home</RouterLink
            >
          </li>
          <li v-if="logged">
            <RouterLink
              to="/dashboard"
              class="fw-bold fs-4 text-white text-decoration-none nav-item"
              >Dashboard</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="fw-bold fs-4 text-white text-decoration-none nav-item"
              >Sobre</RouterLink
            >
          </li>
          <li v-if="!logged">
            <RouterLink
              to="/login"
              class="fw-bold fs-4 text-white text-decoration-none nav-item"
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
      </div>
    </div>
  </nav>
</template>
