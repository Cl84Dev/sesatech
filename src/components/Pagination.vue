<script setup>
import { defineProps } from "vue";

const props = defineProps({
  pagination: String,
  prevPage: Function,
  fetchData: Function,
  nextPage: Function,
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center user-select-none">
      <li
        class="page-item"
        :class="pagination === '1' || pagination === '' ? 'disabled' : ''"
        style="cursor: pointer"
      >
        <a class="page-link" @click="prevPage">Previous</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="pagination === '1' ? 'active' : ''"
          href="#"
          @click="fetchData('1')"
          >1</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="pagination === '2' ? 'active' : ''"
          href="#"
          @click="fetchData('2')"
          >2</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="pagination === '3' ? 'active' : ''"
          href="#"
          @click="fetchData('3')"
          >3</a
        >
      </li>
      <li
        class="page-item"
        :class="pagination === '3' || pagination === '' ? 'disabled' : ''"
        style="cursor: pointer"
      >
        <a class="page-link" href="#" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>
