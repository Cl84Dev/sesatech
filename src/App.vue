<script setup>
import { RouterView } from "vue-router";

import NavBar from "../src/components/NavBar.vue";
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
